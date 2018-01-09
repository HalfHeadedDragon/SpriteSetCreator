import { Component, Input, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { ModelsController } from "./models.controller";

@Component(
{
    selector: 'models',
    templateUrl: './models.component.html',
    styleUrls: ['./models.component.css']
})
export class ModelsComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Models:ModelsController;
    public ModelList:any[];
    public constructor(private _Zone:NgZone, private _ElectronService: ElectronService)
    {
        this._Toggled = true;
    }
    public ngOnInit() : void 
    {
        this.ModelList = [];
        this.Models.AddZone(this._Zone, this.Refresh.bind(this));
        this.Refresh();
    }
    private Refresh() : void
    {
        this.ModelList = this.Models.Models;
    }
    public Select(Value:any) : void
    {
        this.Models.Select(Value);
    }
    public Toggle() : void
    {
        this._Toggled = !this._Toggled;
    }
    public LoadModel() : void
    {
        if(this._ElectronService.isElectronApp)
        {
            this._ElectronService.ipcRenderer.send("model-load-init");
        }
    }
}
