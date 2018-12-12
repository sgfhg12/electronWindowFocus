const { app, BrowserWindow } = require('electron');

let mainWindow;


//1 way of implementing this would be through a child window. 
//the child window would always show above the parent window
//in your case you can make the main app the parent and the steame exe the child
//this way the steam exe will always show over the application window until the user kills the process

//another potential way is using focusable on the browserwindow class 
//ex. new BrowserWindow({focusable: false}) should have the window above all workspaces?

function createWindow () {
    mainWindow = new BrowserWindow({width: 1200, height: 600})

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
});


app.on('activate', () => {
    if (mainWindow === null){
        createWindow()
    }
});
