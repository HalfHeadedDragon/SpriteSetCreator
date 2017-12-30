import { Component, Input } from '@angular/core';

import { ModelsController } from "./../models/models.controller";

@Component(
{
    selector: 'transformations',
    templateUrl: './transformations.component.html',
    styleUrls: ['./transformations.component.css']
})
export class TransformationsComponent
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
