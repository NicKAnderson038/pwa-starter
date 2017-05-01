# [WIP] PWA Starter

Plain Progressive Web Apps starter kit

1st:open vs code (make sure to add the extension Express).

git clone https://github.com/NicKAnderson038/pwa-starter.git
2nd: cd into this new project (pwa-starter).

//======= ENTER ==========================================
yarn
yarn upgrade webpack
yarn upgrade sw-precache-webpack-plugin
//========================================================

3rd: OPEN Express extention by pressing (ctrl, shift , p).
4th: SELECT Express: HOST Current Workspace With Random Port Number.
5th: OPEN Browser incognito(for testing) and type localhost:(copy-paste in random port number).

FINAL: at this point make any changes you want to your code.
ENTER into commandline.
yarn run sw

Re-run the command above each time you want to see the changes in localhost & just refresh twice!

NOTE: freshing twice is the standard way that new features show with service-workers.
If an appliation is closed and re-opened, then new content will show as designed.