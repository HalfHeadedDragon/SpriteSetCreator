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
        ipcMain.on("export-images", this.ExportImages.bind(this));
    }
    ImportModel()
    {
        dialog.showOpenDialog({properties:["openFile"], filter:{extensions:["json"]}, title:"Open your ThreeJS json file.", defaultPath:app.getAppPath("desktop"), buttonLabel:"Open"}, this.ImportModelCallback.bind(this));
    }
    ImportModelCallback(filenames)
    {
        if(!filenames || filenames.length == 0) return;
        this._Window.Window.webContents.send('model-load' , filenames[0]);
    }
    ExportImages(Event, Images)
    {
        this._Images = Images;
        dialog.showOpenDialog({properties:["openDirectory"], title:"Choose where to export images.", defaultPath:app.getAppPath("desktop"), buttonLabel:"Choose"}, this.ExportImagesCallback.bind(this));
    }
    ExportImagesCallback(filenames)
    {
        if(!filenames || filenames.length == 0) return;
        for(let i in this._Images)
        {
            this._FS.WriteImage(filenames[0]+"/"+this._Images[i]._Name + ".png", this._Images[i]._DataUrl);
        }
    }
}

module.exports = ProjectIO;