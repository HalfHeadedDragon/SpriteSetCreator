export { Document }

import { ImageObject } from "./image-object";

class Document
{
    private _Data:any;
    private _Images:ImageObject[];
    private _Exposition:ImageObject[];
    public OnModelImport:Function[];
    public OnTextureImport:Function[];
    public get Data():any { return this._Data; }
    public set Data(value:any) { this._Data = value; }
    public get Images():ImageObject[] { return this._Images; }
    public set Images(value:ImageObject[]) { this._Images = value; }
    public get Exposition():ImageObject[] { return this._Exposition; }
    public set Exposition(value:ImageObject[]) { this._Exposition = value; }
    public constructor()
    {
        this._Images = [];
        this._Exposition = [];
        this.OnModelImport = [];
        this.OnTextureImport = [];
    }
    public ImportModel(Path)
    {
        for(let i in this.OnModelImport)
        {
            this.OnModelImport[i](Path);
        }
    }
    public ImportTexture(Path)
    {
        for(let i in this.OnTextureImport)
        {
            this.OnTextureImport[i](Path);
        }
    }
    public Clear()
    {
        this._Images = [];
        this._Exposition = [];
    }
}