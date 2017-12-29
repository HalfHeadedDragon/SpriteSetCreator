'use strict';

const { app, BrowserWindow, Menu, MenuItem } = require('electron');

class MainMenu
{
    get Menu() { return this._Menu; }
    get FileMenu() { return this._FileMenuItem; }
    constructor()
    {
        this.Init();
    }
    Init()
    {
        this._Menu = new Menu();
    }
    CreateModelMenu(Actions)
    {
        let LoadModelItem = new MenuItem({label:"Import", click:Actions[0]});
        this._FileMenuItem = new MenuItem({label:"Model", submenu:[LoadModelItem]});
        this._Menu.insert(0, this._FileMenuItem);
    }
}

module.exports = MainMenu;