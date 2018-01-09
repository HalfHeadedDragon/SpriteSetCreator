'use strict';

const { app, BrowserWindow } = require("electron");

const Path = __dirname + "/../../dist/"

const args = process.argv.slice(1);
let serve = args.some(val => val === '--serve');
if (serve)
{
    require('electron-reload')
    (__dirname,{
        electron: require('${__dirname}/../../node_modules/electron')
    });
}

const Window = require("./window");
const ProjectIO = require("./project");

class App
{
    constructor()
    {
        this._App = app;
        this.Init();
    }
    Init()
    {
        this.Event("ready", this.ApplicationReady.bind(this));
        this.Event("window-all-closed", this.AllWindowsClosed.bind(this));
    }
    Event(Name, Callback)
    {
        this._App.on(Name, () => Callback());
    }
    ApplicationReady()
    {
        this.CreateMainWindow();
        this.CreateProjectIO();
    }
    CreateMainWindow()
    {
        this._MainWindow = new Window(900, 600, Path);
    }
    CreateProjectIO()
    {
        this._ProjectIO = new ProjectIO(this._MainWindow);
        this._MainWindow.ActivateMenu();
    }
    AllWindowsClosed()
    {
        if (process.platform !== 'darwin')
        {
            this._App.quit()
        }
    }
}

module.exports = App;