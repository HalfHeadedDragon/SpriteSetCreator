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
    private _MousePos:any;
    private _MouseDown:boolean;
    private _Renderer:Renderer;
    public get Renderer():Renderer { return this._Renderer; }
    public constructor() 
    {
        this._MouseDown = false;
    }
    public ngOnInit() : void 
    {
        if(this.Document.Data != null)
        {
            this._Renderer = this.Document.Data;
            this._Renderer.ReInit();
        }
        else
        {
            this._Renderer = new Renderer({X:512, Y:512}, this.Document);
            this.Document.Data = this._Renderer;
        }
    }
    public MouseDown(Event) : void
    {
        this._MouseDown = true;
        this._MousePos = {X:Event.offsetX, Y:Event.offsetY};
    }
    public MouseUp(Event) : void
    {
        this._MouseDown = false;
    }
    public MouseMove(Event) : void
    {
        if(this._MouseDown)
        {
            if(this._Renderer.Models.Selected)
            {
                this._Renderer.Models.Selected.RotationY += (Event.offsetX - this._MousePos.X);
            }
            else
            {
                for(let i in this._Renderer.Models.Models)
                {
                    this._Renderer.Models.Models[i].RotationY += (Event.offsetX - this._MousePos.X);
                }
            }
            this._MousePos = {X:Event.offsetX, Y:Event.offsetY};
        }
    }
}
