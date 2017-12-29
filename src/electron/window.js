'use strict';

const { app, BrowserWindow, globalShortcut } = require('electron');

const MainMenu = require("./menu");

class Window
{
    get MainMenu() { return this._Menu; }
    get Window() { return this._Window; }
    constructor(Width, Height, Path)
    {
        this.Init(Width, Height, Path);
    }
    Init(Width, Height, Path)
    {
        this._Menu = new MainMenu();
        this._Window = new BrowserWindow({width: Width, height: Height, darkTheme:true});
        this._Window.loadURL(Path);
        this.Event("closed", this.Close.bind(this));
        globalShortcut.register('CommandOrControl+R', this.Reload.bind(this));
        globalShortcut.register('CommandOrControl+D', this.DevTools.bind(this));
    }
    ActivateMenu()
    {
        this._Window.setMenu(this._Menu.Menu);
    }
    Reload()
    {
        this._Window.reload();
    }
    DevTools()
    {
        this._Window.webContents.openDevTools()
    }
    Event(Name, Callback)
    {
        this._Window.on(Name, () => Callback());
    }
    Close()
    {
        this._Window = null;
    }
}

module.exports = Window;