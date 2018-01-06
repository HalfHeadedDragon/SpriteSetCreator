import { Component, Input, NgZone } from '@angular/core';

import { ModelsController } from "./../models/models.controller";

@Component(
{
    selector: 'outline',
    templateUrl: './outline.component.html',
    styleUrls: ['./outline.component.css']
})
export class OutlineComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Models:ModelsController;
    public ModelList:any[];
    public constructor(private _Zone:NgZone)
    {
        this._Toggled = false;
    }
    public ngOnInit() : void {}
    public Toggle() : void
    {
        this._Toggled = !this._Toggled;
    }
    public CreateOutline() : void
    {
        this.Models.CreateOutline();
    }
    public RemoveOutline() : void
    {
        this.Models.RemoveOutline();
    }
}
