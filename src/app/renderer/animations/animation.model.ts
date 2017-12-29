export { AnimationModel }

import * as Three from 'three';

class AnimationModel
{
    private _Clips:Three.AnimationClip[];
    private _Animations:any[];
    private _Mixer:Three.AnimationMixer;
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
            Anim.weight = (i == 0)?1:0;
            Anim.play();
            this._Clips.push(Clip);
            this._Animations.push(Anim);
        }
    }
    public Update(Delta:number) : void
    {
        this._Mixer.update(Delta);
    }
}