const ftp = require("basic-ftp");
const fs = require("fs");

const rawJson = JSON.parse(fs.readFileSync("config.json"));

const { ftpConfig, modsDirectory, serverModsDirectory } = rawJson

const Client = new ftp.Client();
Client.ftp.verbose = false;

const setup = async () => {
    await Client.access(ftpConfig);
}

const getModsList = async () => {
    try {
        await Client.cd(serverModsDirectory);
        const mods = await Client.list();
        const names = mods.map(fileInfo => fileInfo.name);
        return names;
    }
    catch (err) {
        console.log(err);
        Client.close();
    }
}

const getModsFromFolder = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(modsDirectory, (err, files) => {
            if(err) {
                console.log(err);
                reject(err);
                return;
            }
            const filenames = files.filter(file => fs.statSync(`${modsDirectory}/${file}`).isFile()).map(filename => filename.split('/').pop());
            resolve(filenames);
        })
    })
}

const compareFiles = async () => {
    try {
        const serverFiles = await getModsList();
        const localFiles = await getModsFromFolder();
        const filenamesNotInLocal = serverFiles.filter(filename => !localFiles.includes(filename));
        console.log("Filenames not in local directory:", filenamesNotInLocal);
        return filenamesNotInLocal;
    } catch (err) {
        console.error(err);
    }
}

const bytesToMb = (bytes) => {
    return (bytes / 1000000).toFixed(2);
}

setup().then(setup => {
    compareFiles().then(async files => {
        for(const file of files) {
            const localPath = `${modsDirectory}/${file}`;
            const filesize = bytesToMb(await Client.size(file));

            Client.trackProgress(info => {
                process.stdout.clearLine();
                process.stdout.cursorTo(0);
                process.stdout.write("File: " + info.name + " ");
                process.stdout.write(bytesToMb(info.bytes) + " MB" + " / " + filesize + " MB");
            });
            await Client.downloadTo(localPath, file);
            process.stdout.write("\n");
        }
    })
    .catch(err  => {
        console.error("Error:", err);
    }).finally(final => {
        Client.close();
        process.stdout.write("\n")
    })
})
