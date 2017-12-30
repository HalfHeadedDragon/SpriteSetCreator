export { RecordController }

import { Document } from "./../document";
import { ImageObject } from "./../image-object";
import { AnimationsController } from "./animations/animations.controller";

class RecordController
{
    private _Renderer:any;
    private _Framerate:number;
    private _Canvas:HTMLCanvasElement;
    private _Document:Document;
    private _Animations:AnimationsController;
    public constructor(Canvas:HTMLCanvasElement, Document:Document, Animations:AnimationsController, Renderer:any)
    {
        this._Framerate = 30;
        this._Renderer = Renderer;
        this._Canvas = Canvas;
        this._Document = Document;
        this._Animations = Animations;
    }
    public Record() : void
    {
        this._Animations.ToggleReplay(false);
        this._Animations.PrepareCapture();
        for(let i = 0; i < this._Framerate; i++)
        {
            this._Renderer.Redraw();
            let Data = this._Canvas.toDataURL();
            let NewImage = new ImageObject(Data);
            this._Document.Images.push(NewImage);
            if(i < this._Framerate - 2) this._Animations.Tick(this._Framerate - 1);
        }
    }
}