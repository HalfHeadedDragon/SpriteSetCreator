export { AnimationModel }

import * as Three from 'three';

class AnimationModel
{
    private _Clips:Three.AnimationClip[];
    private _Animations:any[];
    private _Mixer:Three.AnimationMixer;
    private _Mesh:Three.Mesh;
    public get Actions():number { return this._Animations.length; }
    public constructor(Geometry:any, Mesh:Three.Mesh)
    {
        this.Init(Geometry, Mesh);
    }
    private Init(Geometry:any, Mesh:Three.Mesh) : void
    {
        this._Clips = [];
        this._Animations = [];
        this._Mixer = new Three.AnimationMixer(Mesh);
        for(let i = 0; i < Geometry.animations.length; i++)
        {
            let Clip = Three.AnimationClip.findByName(Geometry.animations, "Animation"+i);
            let Anim = this._Mixer.clipAction(Clip);
            Anim.weight = 0;
            Anim.play();
            this._Clips.push(Clip);
            this._Animations.push(Anim);
        }
    }
    public CheckMesh(Mesh:Three.Mesh) : boolean
    {
        return this._Mesh == Mesh;
    }
    public Update(Delta:number) : void
    {
        this._Mixer.update(Delta);
    }
    public Reset() : void
    {
        for(let i in this._Animations)
        {
            this._Animations[i].reset();
        }
    }
    public UpdateWeights(Weights:number[]) : void
    {
        for(let i in this._Animations)
        {
            this._Animations[i].weight = Weights[i];
        }
    }
    public CalculateDuration() : number
    {
        let Duration = 0;
        for(let i in this._Clips)
        {
            if(this._Animations[i].weight > 0)
            {
                if(this._Clips[i].duration > Duration)
                {
                    Duration = this._Clips[i].duration;
                }
            }
        }
        return Duration;
    }
}