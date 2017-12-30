import { Component, Input, NgZone } from '@angular/core';

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
    public constructor(private _Zone:NgZone)
    {
        this._Toggled = true;
    }
    public ngOnInit() : void 
    {
        this.ModelList = [];
        this.Models.AddZone(this._Zone, this.Refresh.bind(this));
        this.Refresh();
    }
    private Refresh()
    {
        this.ModelList = this.Models.Models;
    }
    public Select(Value:any)
    {
        this.Models.Select(Value);
    }
    public Toggle() : void
    {
        this._Toggled = !this._Toggled;
    }
}
