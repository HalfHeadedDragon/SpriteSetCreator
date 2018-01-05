import { Component, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { Renderer } from "./../renderer";

@Component(
{
    selector: 'advanced',
    templateUrl: './advanced.component.html',
    styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Renderer:Renderer;
    public constructor(private _ElectronService: ElectronService)
    {
        this._Toggled = false;
    }
    public ngOnInit() : void {}
    public Toggle() : void
    {
        this._Toggled = !this._Toggled;
    }
    public NormalMap() : void
    {
        if(this._ElectronService.isElectronApp)
        {
            this._ElectronService.ipcRenderer.send("run-normal-map-generator");
        }
    }
}
