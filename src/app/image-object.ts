export { ImageObject }

class ImageObject
{
    private _DataUrl:string;
    public get DataUrl():string { return this._DataUrl; }
    public set DataUrl(value:string) { this._DataUrl = value; }
    public constructor(DataUrl:string)
    {
        this._DataUrl = DataUrl;
    }
}