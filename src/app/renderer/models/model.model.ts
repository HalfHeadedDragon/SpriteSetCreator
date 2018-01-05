export { Model }

import * as Three from 'three';
import { OutlineShaders } from "./outline/shaders";

class Model
{
    private _Toon:boolean;
    private _Outline:boolean;
    private _Mesh:Three.SkinnedMesh;
    private _OutlineMesh:Three.SkinnedMesh;
    private _Scene:Three.Scene;
    private _Geometry:Three.Geometry;
    private _OutlineWidth:number;
    private _OutlineColor:Three.Color;
    public get Mesh():Three.SkinnedMesh { return this._Mesh; }
    public set Mesh(value:Three.SkinnedMesh) { this._Mesh = value; }
    public get Outline():boolean { return this._Outline; }
    public get Toon():boolean { return this._Toon; }
    public get OutlineMesh():Three.SkinnedMesh { return this._OutlineMesh; }
    public get Geometry():Three.Geometry { return this._Geometry; }
    public get RotationX():number { return (this._Mesh.rotation.x / Math.PI) * 180; }
    public get RotationY():number { return (this._Mesh.rotation.y / Math.PI) * 180; }
    public get RotationZ():number { return (this._Mesh.rotation.z / Math.PI) * 180; }
    public set RotationX(value:number) 
    {
        this._Mesh.rotation.x = (value / 180) * Math.PI;
        if(this._Outline) this._OutlineMesh.rotation.x = (value / 180) * Math.PI;
    }
    public set RotationY(value:number) 
    {
        this._Mesh.rotation.y = (value / 180) * Math.PI;
        if(this._Outline) this._OutlineMesh.rotation.y = (value / 180) * Math.PI;
    }
    public set RotationZ(value:number) 
    {
        this._Mesh.rotation.z = (value / 180) * Math.PI;
        if(this._Outline) this._OutlineMesh.rotation.z = (value / 180) * Math.PI;
    }
    public get OutlineColorR():number { return this._OutlineColor.r; }
    public get OutlineColorG():number { return this._OutlineColor.g; }
    public get OutlineColorB():number { return this._OutlineColor.b; }
    public set OutlineColorR(value:number) { this._OutlineColor.r = value; this.UpdateOutlineColor(); }
    public set OutlineColorG(value:number) { this._OutlineColor.g = value; this.UpdateOutlineColor(); }
    public set OutlineColorB(value:number) { this._OutlineColor.b = value; this.UpdateOutlineColor(); }
    public get OutlineWidth():number { return this._OutlineWidth; }
    public set OutlineWidth(value:number) { this._OutlineWidth = value; this.UpdateOutlineFactor(); }
    public constructor(Scene:Three.Scene, Mesh:Three.SkinnedMesh, Geometry:Three.Geometry)
    {
        this._Outline = false;
        this._Toon = false;
        this._Scene = Scene;
        this._Mesh = Mesh;
        this._Geometry = Geometry;
        this._OutlineWidth = 0.03;
        this._OutlineColor = new Three.Color(0.0,0.0,0.0);
    }
    public CreateOutline() : void
    {
        this._Outline = true;
        this._OutlineMesh = this._Mesh.clone();
        let ColorArray = this._OutlineColor.toArray();
        ColorArray.push(1.0);
        this._OutlineMesh.material = new Three.ShaderMaterial(
        {
            uniforms:
            {
                color: { type:"v4", value:ColorArray },
                factor: { type:"f", value:this._OutlineWidth }
            },
            vertexShader: OutlineShaders.Vertex,
            fragmentShader: OutlineShaders.Fragment,
            skinning: true,
        });
        this._OutlineMesh.material.side = Three.BackSide;
        this._Scene.add(this._OutlineMesh);
    }
    private UpdateOutlineColor() : void
    {
        let ColorArray = this._OutlineColor.toArray();
        ColorArray.push(1.0);
        this._OutlineMesh.material['uniforms'].color.value = ColorArray;
    }
    private UpdateOutlineFactor() : void
    {
        this._OutlineMesh.material['uniforms'].factor.value = this._OutlineWidth;
    }
    public LoadTexture(Texture:any) : void
    {
        if(!this._Toon)
        {
            this.Mesh.material = new Three.MeshPhongMaterial( { color: 0xdddddd, skinning: true, map:Texture });
        }
        else
        {
            this.Mesh.material = new Three.MeshToonMaterial( { color: 0xdddddd, skinning: true, map:Texture, shinines:0 });
        }
    }
    public ToggleToon() : void
    {
        this._Toon = !this._Toon;
        if(!this._Toon)
        {
            this.Mesh.material = new Three.MeshPhongMaterial( { color: 0xdddddd, skinning: true });
        }
        else
        {
            this.Mesh.material = new Three.MeshToonMaterial( { color: 0xdddddd, skinning: true, shinines:0 });
        }
    }
}