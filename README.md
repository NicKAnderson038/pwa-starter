# [WIP] PWA Starter

Plain Progressive Web Apps starter kit  <br />

1st:open vs code (make sure to add the extension Express).  <br />

git clone https://github.com/NicKAnderson038/pwa-starter.git  <br />
2nd: cd into this new project (pwa-starter).  <br />

//ENTER  <br />
yarn  <br />
yarn upgrade webpack  <br />
yarn upgrade sw-precache-webpack-plugin  <br />

3rd: OPEN Express extention by pressing (ctrl, shift , p).  <br />
4th: SELECT Express: HOST Current Workspace With Random Port Number.  <br />
5th: OPEN Browser incognito(for testing) and type localhost:(copy-paste in random port number).  <br />

FINAL: at this point make any changes you want to your code.  <br />
ENTER into commandline.  <br />
yarn run sw  <br />

Re-run the command above each time you want to see the changes in localhost & just refresh twice!  <br />

NOTE: freshing twice is the standard way that new features show with service-workers.  <br />
If an appliation is closed and re-opened, then new content will show as designed.  <br />
