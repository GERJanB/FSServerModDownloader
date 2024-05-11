# FS Server Mod Downloader
This Tool is used to download all Mods missing from your local Farming Simulator Mods Directory from your Dedicated 
Server. To use this Tool there are a few prerequisites:

1. Your Server must support FTP
2. You must have Read Access to the Mods Directory on the Server
3. Currently only Linux and Windows are supported

# Installation

1. Install the latest Version of [NodeJS](https://nodejs.org/en/download)
2. Download the latest Executable from the [Releases Page](https://github.com/GERJanB/FSServerModDownloader/releases/) for your Operating System
3. Put it in whatever Directory you want to
4. In the same Directory as the Executable create a File called `config.json`
5. Open the File with your Editor of choice and insert the following JSON into it and replace the values with your own:

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

6. Now all you need to do is run the Programm and it should automatically download all Mods from the Server that are 
missing from your local Mods Directory