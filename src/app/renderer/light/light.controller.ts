export { LightController }

import * as Three from 'three';

class LightController
{
    private _Light:Three.Light;
    private _AmbientLight:Three.AmbientLight;
    public get Light():Three.Light { return this._Light; }
    public constructor(Scene:Three.Scene)
    {
        this.Init(new Three.Vector3(0, 0, 2000));
        this.Attach(Scene);
    }
    private Init(Position:Three.Vector3) : void
    {
        this._Light = new Three.SpotLight( 0xffffff, 2, 4000, Math.PI / 2, 0.2 );
        this._Light.position.copy(Position);
        this._AmbientLight = new Three.AmbientLight( 0x404040 );
    }
    private Attach(Scene:Three.Scene)
    {
        Scene.add(this._AmbientLight);
        Scene.add(this._Light);
    }
}