# webruntime

Web Runtime is a temporary solution to the lack of native views on Flutter on Linux. This solution relies on Electron and Nodejs, which presents a severe potential security vulnerability. This should be deprecated no later than March of 2022, but this timeframe may change depending on the progress of native-view related work in the Flutter SDK.



## Compiling

To compile, use the following command.

```./node_modules/electron-packager/bin/electron-packager.js . --overwrite --platform=linux --arch=x64 --icon=software.png --prune=true --out=release-builds```

You'll need @electron/remote and electron-packager to use the app. Install it with `npm install @electron/remote --save-dev&&npm install electron-packager --save-dev` before compiling.

## Examples

```./node_modules/.bin/electron main.js  --accent="#7289da" --title="Discord" --windowbar="#282b30" --tbpos="bottom" --bg="#36393e" --mode="dark" --source="https://discord.com/app" --icon="discord-icon.png"```

```./node_modules/.bin/electron main.js  --accent="#ff3d00" --title="Pangolin Desktop" --windowbar="#ff3d00" --tbpos="bottom" --bg="#ffffff" --mode="dark" --source="https://web.dahliaos.io" --icon="https://dahliaos.io/assets/img/favicon.png"```

