export { ImageObject }

class ImageObject
{
    private _Name:string;
    private _DataUrl:string;
    public get Name():string { return this._Name; }
    public set Name(value:string) { this._Name = value; }
    public get DataUrl():string { return this._DataUrl; }
    public set DataUrl(value:string) { this._DataUrl = value; }
    public constructor(Name:string, DataUrl:string)
    {
        this._Name = Name;
        this._DataUrl = DataUrl;
    }
}