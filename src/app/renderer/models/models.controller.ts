export { ModelsController }

import * as Three from 'three';

import { AnimationsController } from "./../animations/animations.controller";

class ModelsController
{
    private _Scene:Three.Scene;
    private _Loader:Three.JSONLoader;
    private _Models:Three.SkinnedMesh[];
    private _Animations:AnimationsController;
    public constructor(Scene:Three.Scene, Animations:AnimationsController)
    {
        this._Scene = Scene;
        this._Animations = Animations;
        this.Init();
    }
    private Init()
    {
        this._Models = [];
    }
    public LoadModel(Path:string)
    {
        if(this._Loader == null) this._Loader = new Three.JSONLoader();
        this._Loader.load(Path, this.LoadModelCallback.bind(this));
    }
    private LoadModelCallback(Geometry, Materials) : void
    {
        this._Animations.PrepareGeometry(Geometry);
        let Mesh = new Three.SkinnedMesh( Geometry, new Three.MeshLambertMaterial( { color: 0xff0000, skinning: true }));
        Mesh.scale.set(100,100,100);
        Mesh.rotation.y = Math.PI / 2;
        this._Models.push(Mesh);
        this._Animations.AddModel(Geometry, Mesh);
        this._Scene.add(Mesh);
    }
}