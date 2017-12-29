import { NgZone } from '@angular/core';
import * as Three from 'three';

import { AnimationsController } from "./../animations/animations.controller";

export class ModelsController
{
    private _Zone:NgZone;
    private _Callback:Function;
    private _Scene:Three.Scene;
    private _Loader:Three.JSONLoader;
    private _Selected:Three.SkinnedMesh;
    private _Models:Three.SkinnedMesh[];
    private _Animations:AnimationsController;
    public get Models():Three.SkinnedMesh[] { return this._Models; }
    public get Selected():Three.SkinnedMesh { return this._Selected; }
    public get RotationX():number { return (this._Selected.rotation.x / Math.PI) * 180; }
    public get RotationY():number { return (this._Selected.rotation.y / Math.PI) * 180; }
    public get RotationZ():number { return (this._Selected.rotation.z / Math.PI) * 180; }
    public set RotationX(value:number) { this._Selected.rotation.x = (value / 180) * Math.PI; }
    public set RotationY(value:number) { this._Selected.rotation.y = (value / 180) * Math.PI; }
    public set RotationZ(value:number) { this._Selected.rotation.z = (value / 180) * Math.PI; }
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
    private LoadModelHandler(Geometry, Materials) { this._Zone.run(function() { this.LoadModelCallback(Geometry, Materials) }.bind(this));}
    private LoadModelCallback(Geometry, Materials) : void
    {
        this._Animations.PrepareGeometry(Geometry);
        let Mesh = new Three.SkinnedMesh( Geometry, new Three.MeshLambertMaterial( { color: 0xdddddd, skinning: true }));
        Mesh.scale.set(100,100,100);
        Mesh.name = "Model " + (this._Models.length + 1);
        Mesh.visible = this._Selected == null;
        this._Models.push(Mesh);
        this._Animations.AddModel(Geometry, Mesh);
        this._Scene.add(Mesh);
        this._Callback();
    }
    public Select(Model:Three.SkinnedMesh) : void
    {
        if(Model != null && this._Models.indexOf(Model) == -1) return;
        this._Selected = Model;
        this.ResolveSelect();
    }
    private ResolveSelect() : void
    {
        if(this._Selected == null)
        {
            for(let i in this._Models) this._Models[i].visible = true;
        }
        else
        {
            for(let i in this._Models) this._Models[i].visible = false;
            this._Selected.visible = true;
        }
    }
}