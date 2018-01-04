export { LightController }

import * as Three from 'three';

class LightController
{
    private _Scene:Three.Scene;
    private _Light:Three.Light;
    private _ExpositionLights:Three.Light[];
    private _AmbientLight:Three.AmbientLight;
    public get Light():Three.Light { return this._Light; }
    public get Ambient():Three.AmbientLight { return this._AmbientLight; }
    public get RotationX():number { return (this._Light.rotation.x / Math.PI) * 180; }
    public get RotationY():number { return (this._Light.rotation.y / Math.PI) * 180; }
    public get RotationZ():number { return (this._Light.rotation.z / Math.PI) * 180; }
    public set RotationX(value:number) { this._Light.rotation.x = (value / 180) * Math.PI; }
    public set RotationY(value:number) { this._Light.rotation.y = (value / 180) * Math.PI; }
    public set RotationZ(value:number) { this._Light.rotation.z = (value / 180) * Math.PI; }
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
        this._ExpositionLights = [];
        let ExpositionLight = new Three.SpotLight(0xffffff, 1);
        ExpositionLight.position.set(1000, 180, 0);
        this._ExpositionLights.push(ExpositionLight);
        ExpositionLight = new Three.SpotLight(0xffffff, 1);
        ExpositionLight.position.set(-1000, 180, 0);
        this._ExpositionLights.push(ExpositionLight);
        ExpositionLight = new Three.SpotLight(0xffffff, 1);
        ExpositionLight.position.set(0, 1000, 0);
        this._ExpositionLights.push(ExpositionLight);
        ExpositionLight = new Three.SpotLight(0xffffff, 1);
        ExpositionLight.position.set(0, -1000, 0);
        this._ExpositionLights.push(ExpositionLight);
    }
    private Attach(Scene:Three.Scene)
    {
        this._Scene = Scene;
        Scene.add(this._AmbientLight);
        Scene.add(this._Light);
    }
    public SwitchLight(Index:number) : void
    {
        if(Index == 0)
        {
            this._Scene.remove(this._ExpositionLights[3]);
            this._Scene.add(this._AmbientLight);
            this._Scene.add(this._Light);
        }
        else if(Index == 1)
        {
            this._Scene.remove(this._AmbientLight);
            this._Scene.remove(this._Light);
            this._Scene.add(this._ExpositionLights[0]);
        }
        else
        {
            this._Scene.remove(this._ExpositionLights[Index - 2]);
            this._Scene.add(this._ExpositionLights[Index - 1]);
        }
    }
}