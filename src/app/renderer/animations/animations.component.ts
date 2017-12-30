import { Component, Input } from '@angular/core';

import { AnimationsController } from "./animations.controller";

@Component(
{
    selector: 'animations',
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.css']
})
export class AnimationsComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Animations:AnimationsController;
    public constructor()
    {
        this._Toggled = true;
    }
    public ngOnInit() : void {}
    public UpdateWeights() : void
    {
        this.Animations.UpdateWeights();
    }
    public Toggle() : void
    {
        this._Toggled = !this._Toggled;
    }
}
