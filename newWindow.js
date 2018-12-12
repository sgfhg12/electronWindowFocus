const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const { remote } = require('electron')

const btn = document.getElementById('btn')

//this uses electron's remote to get the current open window in this case the browser window
//it will then set that window to the parent of the new child window it creates
//child windows will always focus above parent windows

btn.addEventListener('click', (event) => {
    let mainWindow = remote.getCurrentWindow();
    let child = new BrowserWindow({parent: mainWindow})

    child.on('closed', () => {
        child = null
    })

    child.show()

})

