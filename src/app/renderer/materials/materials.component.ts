import { Component, Input } from '@angular/core';

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
    public constructor()
    {
        this._Toggled = true;
    }
    public ngOnInit() : void {}
    public Toggle() : void
    {
        this._Toggled = !this._Toggled;
    }
}
