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
    @Input() Models:ModelsController;
    public ModelList:any[];
    public constructor(private _Zone:NgZone) {}
    public ngOnInit() : void 
    {
        this.ModelList = [];
        this.Models.AddZone(this._Zone, this.Refresh.bind(this));
    }
    private Refresh()
    {
        this.ModelList = this.Models.Models;
    }
    public Select(Value:any)
    {
        this.Models.Select(Value);
    }
}
