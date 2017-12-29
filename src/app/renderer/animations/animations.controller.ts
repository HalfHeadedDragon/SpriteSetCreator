export { AnimationsController }

import * as Three from 'three';

import { AnimationModel } from "./animation.model";

class AnimationsController
{
    private _Weights:number[]
    private _Replay:boolean;
    private _Clock:Three.Clock;
    private _Animations:AnimationModel[];
    public get Replay():boolean { return this._Replay; }
    public get Weights():number[] { return this._Weights; }
    public set Weights(value:number[]) { this._Weights = value; }
    public constructor()
    {
        this.Init();
    }
    private Init() : void
    {
        this._Weights = [];
        this._Animations = [];
        this._Clock = new Three.Clock();
        this._Replay = true;
    }
    public Update() : void
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
    public AddModel(Geometry:any, Mesh:Three.Mesh) : void
    {
        let Animation = new AnimationModel(Geometry, Mesh);
        for(let i = this._Weights.length; i < Animation.Actions; i++)
        {
            this._Weights.push(0);
        }
        //Animation.UpdateWeights(this._Weights);
        this._Animations.push(Animation);
    }
    public PrepareGeometry(Geometry:any) : void
    {
        for(let i in Geometry.animations)
        {
            Geometry.animations[i].name = "Animation" + i;
        }
    }
    public ToggleReplay(Value:boolean) : void
    {
        this._Replay = Value;
        if(!Value) this.Stop();
    }
    private Stop() : void
    {
        for(let i in this._Animations)
        {
            this._Animations[i].Reset();
        }
    }
    public UpdateWeights() : void
    {
        for(let i in this._Animations)
        {
            this._Animations[i].UpdateWeights(this._Weights);
        }
    }
}