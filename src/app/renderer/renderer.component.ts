import { Component, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { Renderer } from "./renderer";
import { Document } from "./../document";

@Component(
{
    selector: 'renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.css']
})
export class RendererComponent
{
    @Input() Document:Document;
    private _Renderer:Renderer;
    public get Renderer():Renderer { return this._Renderer; }
    public constructor() {}
    public ngOnInit() : void 
    {
        this._Renderer = new Renderer({X:512, Y:512}, this.Document);
    }
}
