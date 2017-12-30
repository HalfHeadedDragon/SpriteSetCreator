export { Document }

import { ImageObject } from "./image-object";

class Document
{
    private _Data:any;
    private _Images:ImageObject[];
    public OnModelImport:Function[];
    public get Data():any { return this._Data; }
    public set Data(value:any) { this._Data = value; }
    public get Images():ImageObject[] { return this._Images; }
    public constructor()
    {
        this._Images = [];
        this.OnModelImport = [];
    }
    public ImportModel(Path)
    {
        for(let i in this.OnModelImport)
        {
            this.OnModelImport[i](Path);
        }
    }
}