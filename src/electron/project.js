'use strict';

const { app, Menu, MenuItem, dialog, ipcMain } = require('electron');

const FileSystem = require("./fsmanager");

class ProjectIO
{
    constructor(Window)
    {
        this._Window = Window;
        this._FS = new FileSystem();
        this.Init();
    }
    Init()
    {
        this._Window.MainMenu.CreateModelMenu([this.ImportModel.bind(this)]);
        //ipcMain.on("open-file", this.ReadFile.bind(this));
    }
    ImportModel()
    {
        dialog.showOpenDialog({properties:["openFile"], filter:{extensions:["json"]}, title:"Open your existing project.", defaultPath:app.getAppPath("desktop"), buttonLabel:"Open"}, this.ImportModelCallback.bind(this));
    }
    ImportModelCallback(filenames)
    {
        this._Window.Window.webContents.send('model-load' , filenames[0]);
    }
}

module.exports = ProjectIO;