export { Document }

import { ImageObject } from "./image-object";

class Document
{
    private _Data:any;
    private _Images:ImageObject[];
    private _Exposure:ImageObject[];
    public _OnModelImport:Function[];
    public _OnTextureImport:Function[];
    public get Data():any { return this._Data; }
    public set Data(value:any) { this._Data = value; }
    public get Images():ImageObject[] { return this._Images; }
    public set Images(value:ImageObject[]) { this._Images = value; }
    public get Exposure():ImageObject[] { return this._Exposure; }
    public set Exposure(value:ImageObject[]) { this._Exposure = value; }
    public get OnModelImport():Function[] { return this._OnModelImport; }
    public get OnTextureImport():Function[] { return this._OnTextureImport; }
    public constructor()
    {
        this._Images = [];
        this._Exposure = [];
        this._OnModelImport = [];
        this._OnTextureImport = [];
    }
    public ImportModel(Path)
    {
        for(let i in this._OnModelImport)
        {
            this._OnModelImport[i](Path);
        }
    }
    public ImportTexture(Path)
    {
        for(let i in this._OnTextureImport)
        {
            this._OnTextureImport[i](Path);
        }
    }
    public Clear()
    {
        this._Images = [];
        this._Exposure = [];
    }
}