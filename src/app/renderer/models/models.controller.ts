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
    private _Selected:Model;
    private _Models:Model[];
    private _Animations:AnimationsController;
    public get Models():Model[] { return this._Models; }
    public get Selected():Model { return this._Selected; }
    public get RotationX():number { return (this._Selected.Mesh.rotation.x / Math.PI) * 180; }
    public get RotationY():number { return (this._Selected.Mesh.rotation.y / Math.PI) * 180; }
    public get RotationZ():number { return (this._Selected.Mesh.rotation.z / Math.PI) * 180; }
    public set RotationX(value:number) { this._Selected.Mesh.rotation.x = (value / 180) * Math.PI; }
    public set RotationY(value:number) { this._Selected.Mesh.rotation.y = (value / 180) * Math.PI; }
    public set RotationZ(value:number) { this._Selected.Mesh.rotation.z = (value / 180) * Math.PI; }
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
        let NewModel = new Model(Mesh);
        this._Models.push(NewModel);
        this._Animations.AddModel(Geometry, Mesh);
        this._Scene.add(Mesh);
        this._Callback();
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
}