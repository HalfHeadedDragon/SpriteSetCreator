import { Component, Input } from '@angular/core';

import { CameraController } from "./camera.controller";

@Component(
{
    selector: 'camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.css']
})
export class CameraComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Camera:CameraController;
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
