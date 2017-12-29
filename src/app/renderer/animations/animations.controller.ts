export { AnimationsController }

import * as Three from 'three';

import { AnimationModel } from "./animation.model";

class AnimationsController
{
    private _Replay:boolean;
    private _Clock:Three.Clock;
    private _Animations:AnimationModel[];
    public constructor()
    {
        this.Init();
    }
    private Init() : void
    {
        this._Animations = [];
        this._Clock = new Three.Clock();
        this._Replay = true;
    }
    public Update()
    {
        if(this._Replay)
        {
            let Delta = this._Clock.getDelta();
            for(let i in this._Animations)
            {
                this._Animations[i].Update( Delta );
            }
        }
    }
    public AddModel(Geometry:any, Mesh:Three.Mesh)
    {
        let Animation = new AnimationModel(Geometry, Mesh);
        this._Animations.push(Animation);
    }
    public PrepareGeometry(Geometry:any)
    {
        for(let i in Geometry.animations)
        {
            Geometry.animations[i].name = "Animation" + i;
        }
    }
}