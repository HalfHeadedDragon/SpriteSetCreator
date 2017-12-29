export { CameraController }

import * as Three from 'three';

class CameraController
{
    private _Camera:Three.Camera;
    public get Camera():Three.Camera { return this._Camera; }
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