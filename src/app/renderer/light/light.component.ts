import { Component, Input } from '@angular/core';

import { LightController } from "./light.controller";

@Component(
{
    selector: 'light',
    templateUrl: './light.component.html',
    styleUrls: ['./light.component.css']
})
export class LightComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Light:LightController;
    public constructor()
    {
        this._Toggled = false;
    }
    public ngOnInit() : void {}
    public Toggle() : void
    {
        this._Toggled = !this._Toggled;
    }
}
