import { NgZone } from '@angular/core';
import * as Three from 'three';

import { Model } from "./model.model";
import { AnimationsController } from "./../animations/animations.controller";

export class ModelsController
{
    private _Zone:NgZone;
    private _Callback:Function;
    private _Scene:Three.Scene;
    private _Loader:Three.JSONLoader;
    private _TextureLoader:Three.TextureLoader;
    private _Selected:Model;
    private _Models:Model[];
    private _Animations:AnimationsController;
    public get Models():Model[] { return this._Models; }
    public get Selected():Model { return this._Selected; }
    public constructor(Scene:Three.Scene, Animations:AnimationsController)
    {
        this._Scene = Scene;
        this._Animations = Animations;
        this.Init();
    }
    private Init()
    {
        this._Models = [];
        this._Selected = null;
    }
    public AddZone(Zone:NgZone, Callback:Function)
    {
        this._Zone = Zone;
        this._Callback = Callback;
    }
    public LoadModel(Path:string)
    {
        if(this._Loader == null) this._Loader = new Three.JSONLoader();
        this._Loader.load(Path, this.LoadModelHandler.bind(this));
    }
    public LoadTexture(Path:string)
    {
        if(!this._Selected) return;
        if(this._TextureLoader == null) this._TextureLoader = new Three.TextureLoader();
        this._TextureLoader.load(Path, this.LoadTextureHandler.bind(this));
    }
    private LoadModelHandler(Geometry, Materials) { this._Zone.run(function() { this.LoadModelCallback(Geometry, Materials) }.bind(this));}
    private LoadTextureHandler(Texture) { this._Zone.run(function() { this.LoadTextureCallback(Texture) }.bind(this));}
    private LoadModelCallback(Geometry, Materials) : void
    {
        this._Animations.PrepareGeometry(Geometry);
        let Mesh = new Three.SkinnedMesh( Geometry, new Three.MeshPhongMaterial( { color: 0xdddddd, skinning: true }));
        Mesh.scale.set(100,100,100);
        Mesh.name = "Model " + (this._Models.length + 1);
        Mesh.visible = this._Selected == null;
        let NewModel = new Model(this._Scene, Mesh, Geometry);
        this._Models.push(NewModel);
        this._Animations.AddModel(Geometry, Mesh);
        this._Scene.add(Mesh);
        this._Callback();
    }
    private LoadTextureCallback(Texture) : void
    {
        this._Selected.LoadMaterial(Texture);
    }
    public ToggleToon()
    {
        this._Selected.ToggleToon();
    }
    public CreateOutline() : void
    {
        this._Selected.CreateOutline();
        this._Animations.AddModel(this._Selected.Geometry, this._Selected.OutlineMesh);
        this._Animations.ToggleReplay(false);
        this._Animations.ToggleReplay(true);
    }
    public RemoveOutline() : void
    {
        this._Animations.RemoveModel(this._Selected.OutlineMesh);
        this._Selected.RemoveOutline();
    }
    public Select(Model:Model) : void
    {
        if(Model != null && this._Models.indexOf(Model) == -1) return;
        this._Selected = Model;
        this.ResolveSelect();
    }
    private ResolveSelect() : void
    {
        if(this._Selected == null)
        {
            for(let i in this._Models) this._Models[i].Mesh.visible = true;
        }
        else
        {
            for(let i in this._Models) this._Models[i].Mesh.visible = false;
            this._Selected.Mesh.visible = true;
        }
    }
    public ActivateExposure() : void
    {
        if(this._Selected)
        {
            this._Selected.ActivateExposure();
        }
        else
        {
            for(let i in this._Models) this._Models[i].ActivateExposure();
        }
    }
    public DeactivateExposure() : void
    {
        if(this._Selected)
        {
            this._Selected.DeactivateExposure();
        }
        else
        {
            for(let i in this._Models) this._Models[i].DeactivateExposure();
        }
    }
}