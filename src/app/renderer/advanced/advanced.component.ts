import { Component, Input } from '@angular/core';

import { Renderer } from "./../renderer";

@Component(
{
    selector: 'advanced',
    templateUrl: './advanced.component.html',
    styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Renderer:Renderer;
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
