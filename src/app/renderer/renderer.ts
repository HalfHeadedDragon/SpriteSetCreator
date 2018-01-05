export { Renderer }

import * as Three from 'three';

import { Document } from "./../document";
import { CameraController } from "./camera/camera.controller";
import { ModelsController } from "./models/models.controller";
import { LightController } from "./light/light.controller";
import { AnimationsController } from "./animations/animations.controller";
import { RecordController } from "./record.controller";

class Renderer
{
    private _Scene:Three.Scene;
    private _Target:HTMLCanvasElement;
    private _Resolution:any;
    private _Document:Document;
    private _Light:LightController;
    private _Camera:CameraController;
    private _Models:ModelsController;
    private _Animations:AnimationsController;
    private _Renderer:Three.WebGLRenderer;
    private _Recorder:RecordController;
    public get ResolutionX():number { return this._Resolution.X; }
    public set ResolutionX(value:number) { this._Resolution.X = value; this.UpdateResolution(); }
    public get ResolutionY():number { return this._Resolution.Y; }
    public set ResolutionY(value:number) { this._Resolution.Y = value; this.UpdateResolution(); }
    public get Light():LightController { return this._Light; }
    public get Camera():CameraController { return this._Camera; }
    public get Models():ModelsController { return this._Models; }
    public get Animations():AnimationsController { return this._Animations; }
    public get Recorder():RecordController { return this._Recorder; }
    public constructor(Resolution:any, Document:Document)
    {
        this._Resolution = Resolution;
        this._Document = Document;
        this._Document.OnModelImport.push(this.LoadModel.bind(this));
        this._Document.OnTextureImport.push(this.LoadTexture.bind(this));
        this.Init(Resolution);
    }
    public Init(Resolution:any) : void
    {
        this._Scene = new Three.Scene();
        this._Target = document.getElementById("canvas") as HTMLCanvasElement;
        this._Camera = new CameraController(Resolution);
        this._Light = new LightController(this._Scene);
        this._Animations = new AnimationsController();
        this._Models = new ModelsController(this._Scene, this._Animations);
        this._Recorder = new RecordController(this._Target, this._Document, this._Animations, this);
        this._Renderer = new Three.WebGLRenderer({canvas:this._Target, alpha:true, preserveDrawingBuffer: true});
        this._Renderer.setPixelRatio( window.devicePixelRatio );
        this._Renderer.setSize( Resolution.X, Resolution.Y );
        this._Renderer.setClearColor(0x000000, 0);
        window.requestAnimationFrame(this.Draw.bind(this));
    }
    public ReInit() : void
    {
        this._Target = document.getElementById("canvas") as HTMLCanvasElement;
        this._Renderer = new Three.WebGLRenderer({canvas:this._Target, alpha:true, preserveDrawingBuffer: true});
        this._Renderer.setPixelRatio( window.devicePixelRatio );
        this._Renderer.setSize( this._Resolution.X, this._Resolution.Y );
        this._Renderer.setClearColor(0x000000, 0);
    }
    public UpdateResolution() : void
    {
        this._Camera.UpdateResolution(this._Resolution);
        this._Renderer.setSize( this._Resolution.X, this._Resolution.Y );
    }
    public SetDocument(Document:Document) : void
    {
        this._Document = Document;
    }
    private Draw() : void
    {
        this._Animations.Update();
        this._Renderer.render( this._Scene, this._Camera.Camera );
        window.requestAnimationFrame(this.Draw.bind(this));
    }
    public Redraw() : void
    {
        this._Renderer.render( this._Scene, this._Camera.Camera );
    }
    private LoadModel(Path:string):void
    {
        this._Models.LoadModel(Path);
    }
    private LoadTexture(Path:string):void
    {
        this._Models.LoadTexture(Path);
    }
}