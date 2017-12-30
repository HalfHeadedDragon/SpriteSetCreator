import { Component, Input } from '@angular/core';

import { AnimationsController } from "./../animations/animations.controller";

@Component(
{
    selector: 'replay',
    templateUrl: './replay.component.html',
    styleUrls: ['./replay.component.css']
})
export class ReplayComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Animations:AnimationsController;
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
