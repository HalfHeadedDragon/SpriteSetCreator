export { Document }

class Document
{
    private _Model:string;
    public OnModelImport:Function[];
    public constructor()
    {
        this.OnModelImport = [];
    }
    public ImportModel(Path)
    {
        this._Model = Path;
        for(let i in this.OnModelImport)
        {
            this.OnModelImport[i](Path);
        }
    }
}