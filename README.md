# FS Server Mod Downloader
This Tool is used to download all Mods missing from your local Farming Simulator Mods Directory from your Dedicated 
Server. To use this Tool there are a few prerequisites:

1. Your Server must support FTP
2. You must have Read Access to the Mods Directory on the Server
3. Currently only Linux and Windows are supported

# Installation

1. Download the latest Executable from the Releases Page for your Operating System
2. Put it in whatever Directory you want to
3. In the same Directory as the Executable create a File called `config.json`
4. Open the File with your Editor of choice and insert the following JSON into it and replace the values with your own:

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