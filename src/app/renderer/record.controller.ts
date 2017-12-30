export { RecordController }

import { Document } from "./../document";
import { ImageObject } from "./../image-object";
import { AnimationsController } from "./animations/animations.controller";

class RecordController
{
    private _LightExposition:boolean;
    private _Renderer:any;
    private _Framerate:number;
    private _Canvas:HTMLCanvasElement;
    private _Document:Document;
    private _Animations:AnimationsController;
    public get Framerate():number { return this._Framerate; }
    public set Framerate(value:number) { this._Framerate = value; }
    public get LightExposition():boolean { return this._LightExposition; }
    public set LightExposition(value:boolean) { this._LightExposition = value; }
    public constructor(Canvas:HTMLCanvasElement, Document:Document, Animations:AnimationsController, Renderer:any)
    {
        this._Framerate = 30;
        this._LightExposition = false;
        this._Renderer = Renderer;
        this._Canvas = Canvas;
        this._Document = Document;
        this._Animations = Animations;
    }
    public Record() : void
    {
        this._Document.Images.splice(0);
        this._Document.Exposition.splice(0);
        this._Animations.ToggleReplay(false);
        this._Animations.PrepareCapture();
        for(let i = 0; i < this._Framerate; i++)
        {
            this._Renderer.Redraw();
            let Data = this._Canvas.toDataURL();
            let NewImage = new ImageObject("Sprite"+(i+1),Data);
            this._Document.Images.push(NewImage);
            if(i < this._Framerate - 1) this._Animations.Tick(this._Framerate - 1);
        }
        let Directions = ["Left","Right","Up","Down"];
        if(this._LightExposition)
        {
            for(let i = 0; i < 4; i++)
            {
                this._Renderer.Light.SwitchLight(i+1);
                this._Animations.ToggleReplay(false);
                for(let j = 0; j < this._Framerate; j++)
                {
                    this._Renderer.Redraw();
                    let Data = this._Canvas.toDataURL();
                    let NewImage = new ImageObject(Directions[i]+(j+1),Data);
                    this._Document.Exposition.push(NewImage);
                    if(j < this._Framerate - 1) this._Animations.Tick(this._Framerate - 1);
                }
            }
        }
        this._Renderer.Light.SwitchLight(0);
    }
}