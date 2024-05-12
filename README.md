# FS Server Mod Downloader
This Tool is used to download all Mods missing from your local Farming Simulator Mods Directory from your Dedicated 
Server. To use this Tool there are a few prerequisites:

1. Your Server must support FTP
2. You must have Read Access to the Mods Directory on the Server
3. Currently only Linux and Windows are supported

## Installation <a name="install" />

1. Download the latest Executable from the [Releases Page](https://github.com/GERJanB/FSServerModDownloader/releases/) for your Operating System
2. Put it in whatever Directory you want to
3. Run the Application once to create an example config. On Linux this should be `~/.config/moddownloader`. On Windows it should be in `%LOCALAPPDATA%\moddownloader`.
4. Open the File with your Editor of choice. It should look like this. Replace the example Values with your actual FTP Data and Paths.

```json
{ 
    "ftpConfig": {
        "host": "example.url",
        "port": "1234",
        "user": "exampleUser",
        "password": "examplePassword"
    },
    "modsDirectory": "path/to/your/ModDirectory",
    "serverModsDirectory": "path/to/server/mods"
}
```
Disclaimer: If you are on Windows your Path should look something like this `C:\\User\\Documents\\My Games\\FarmingSimulator22\\mods`.
Note the double Backslash as this is how you have to write your Path in the `config.json`.

5. Now all you need to do is run the Programm and it should automatically download all Mods from the Server that are 
missing from your local Mods Directory

## Build from Source
If you just want to run the Application without installing follow these Steps:

1. Install the latest Version of [NodeJS](https://nodejs.org/en/download)
2. Clone the Repository
3. Inside of the Directory run `node index.js`
4. Edit the create config.json as explained in [Step 4 of the Installation](#install)

If you want to create your own Binary follow these Steps:

1. Install the latest Version of [NodeJS](https://nodejs.org/en/download)
2. Clone the Repository
3. Run `npm install -g @yao-pkg/pkg`
4. In the package.json under `targets` specify your operating system (Default are Windows and Linux, you can just
delete the one you don't need)
5. In the Root Directory of the Project run `pkg .`
6. The created Binary will be in the `dist` Directory