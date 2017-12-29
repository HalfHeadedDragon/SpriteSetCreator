export { CameraController }

import * as Three from 'three';

class CameraController
{
    private _Camera:Three.Camera;
    public get Camera():Three.Camera { return this._Camera; }
    public get RotationX():number { return (this._Camera.rotation.x / Math.PI) * 180; }
    public get RotationY():number { return (this._Camera.rotation.y / Math.PI) * 180; }
    public get RotationZ():number { return (this._Camera.rotation.z / Math.PI) * 180; }
    public set RotationX(value:number) { this._Camera.rotation.x = (value / 180) * Math.PI; }
    public set RotationY(value:number) { this._Camera.rotation.y = (value / 180) * Math.PI; }
    public set RotationZ(value:number) { this._Camera.rotation.z = (value / 180) * Math.PI; }
    public constructor(Resolution:any)
    {
        this.Init(Resolution, new Three.Vector3(0, 180, 600), new Three.Euler(0, 0, 0));
    }
    private Init(Resolution:any, Position:Three.Vector3, Rotation:Three.Euler) : void
    {
        this._Camera = new Three.PerspectiveCamera( 45, Resolution.X / Resolution.Y, 1, 10000 );
        this._Camera.position.copy(Position);
        this._Camera.rotation.copy(Rotation);
        this._Camera.lookAt (new Three.Vector3 (0.0, Position.y, 0.0));
    }
    public UpdateResolution(Resolution:any)
    {
        this.Init(Resolution, this._Camera.position, this._Camera.rotation);
    }
}