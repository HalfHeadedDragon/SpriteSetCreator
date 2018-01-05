import { Component, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { ModelsController } from "./../models/models.controller";

@Component(
{
    selector: 'materials',
    templateUrl: './materials.component.html',
    styleUrls: ['./materials.component.css']
})
export class MaterialsComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Models:ModelsController;
    public constructor(private _ElectronService: ElectronService)
    {
        this._Toggled = false;
    }
    public ngOnInit() : void {}
    public Toggle() : void
    {
        this._Toggled = !this._Toggled;
    }
    public TextureLoad() : void
    {
        if(this._ElectronService.isElectronApp)
        {
            this._ElectronService.ipcRenderer.send("texture-load-init");
        }
    }
}
