const path = require('path');
const { app, BrowserWindow } = require('electron');

function CreateMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Poweroff',
        width: 600,
        height: 500,
        icon: __dirname + './src/img/power.png',
        autoHideMenuBar: true,
        resizable: false,
        maximizable: false,
    });

    //  if (process.env.NODE_ENV === 'development') {
    //     mainWindow.webContents.openDevTools();
    // }

    mainWindow.loadFile(path.join(__dirname, './src/html/index.html'));
}

app.whenReady().then(() => {
    CreateMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            CreateMainWindow();
        }
    });
});

app.on('window-all-closed', () => {
    app.quit();
})
