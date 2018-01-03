export { Model }

import * as Three from 'three';

class Model
{
    private _Outline:boolean;
    private _Mesh:Three.SkinnedMesh;
    public get Mesh():Three.SkinnedMesh { return this._Mesh; }
    public set Mesh(value:Three.SkinnedMesh) { this._Mesh = value; }
    public constructor(Mesh:Three.SkinnedMesh)
    {
        this._Outline = false;
        this._Mesh = Mesh;
    }
}