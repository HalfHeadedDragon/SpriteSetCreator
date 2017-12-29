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
    public constructor() {}
    public ngOnInit() : void 
    {
        this._Renderer = new Renderer({X:500, Y:500}, this.Document);
    }
}
