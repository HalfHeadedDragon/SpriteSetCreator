var Jimp = require("jimp");

class ImageManager
{
    constructor()
    {
        this.Init();
    }
    Init()
    {
        
    }
    CreateNormalMap(Params)
    {
        this._Params = Params;
        let Image = new Jimp(Params.X, Params.Y, this._NMCreateNormalMap1.bind(this));
    }
    _NMNewImageCreated(Error, Image)
    {
        this._Image = Image;
        Jimp.read(this._Params.LeftPath, this._NMLeftLoaded.bind(this));
        Promise.all()
    }
    _NMLoadImage(Path)
    {
        return new Promise(new function(Resolve, Reject)
        {
            Jimp.read(Path, function(Error, Image)
            {
                if(Error) Reject(Error);
                else Resolve(Image);

            }.bind(this));
        });
    }
    _NMLoadLeft(Path)
    {
        
    }
}