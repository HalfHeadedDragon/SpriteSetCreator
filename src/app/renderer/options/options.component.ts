import { Component, Input } from '@angular/core';

import { Renderer } from "./../renderer";

@Component(
{
    selector: 'options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent
{
    private _Toggled:boolean;
    public get Toggled():boolean { return this._Toggled; }
    @Input() Renderer:Renderer;
    public constructor()
    {
        this._Toggled = true;
    }
    public ngOnInit() : void {}
    public Record() : void
    {
        this.Renderer.Recorder.Record();
    }
    public Toggle() : void
    {
        this._Toggled = !this._Toggled;
    }
}
