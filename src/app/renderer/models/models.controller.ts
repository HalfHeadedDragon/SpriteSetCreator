export { ModelsController }

import { NgZone } from '@angular/core';
import * as Three from 'three';

import { AnimationsController } from "./../animations/animations.controller";

class ModelsController
{
    private _Scene:Three.Scene;
    private _Loader:Three.JSONLoader;
    private _Selected:Three.SkinnedMesh;
    private _Models:Three.SkinnedMesh[];
    private _Animations:AnimationsController;
    public get Models():Three.SkinnedMesh[] { return this._Models; }
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
    public LoadModel(Path:string)
    {
        if(this._Loader == null) this._Loader = new Three.JSONLoader();
        this._Loader.load(Path, this.LoadModelHandler.bind(this));
    }
    private LoadModelHandler(Geometry, Materials) { NgZone.run(function() { this.LoadModelCallback(Geometry, Materials) }.bind(this));}
    private LoadModelCallback(Geometry, Materials) : void
    {
        this._Animations.PrepareGeometry(Geometry);
        let Mesh = new Three.SkinnedMesh( Geometry, new Three.MeshLambertMaterial( { color: 0xff0000, skinning: true }));
        Mesh.scale.set(100,100,100);
        this._Models.push(Mesh);
        this._Animations.AddModel(Geometry, Mesh);
        this._Scene.add(Mesh);
    }
    public Select(Model:Three.SkinnedMesh) : void
    {
        if(Model == null) return;
        if(this._Models.indexOf(Model) == -1) return;
        this._Selected = Model;
    } 
}