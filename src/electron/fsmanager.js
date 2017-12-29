'use strict';

const fs = require('fs');
const path = require('path');

class FileSystem
{
    constructor()
    {
        this._CurrentLocation = __dirname;
    }
    LocationExists(Location)
    {
        return fs.existsSync(Location);
    }
    CreateDirectory(Location)
    {
        return fs.mkdirSync(Location);
    }
    WriteFile(Location, Data)
    {
        fs.writeFileSync(Location, Data);
    }
    ReadFile(Location)
    {
        return JSON.parse(fs.readFileSync(Location, "utf8"));
    }
    ReadDirectoryTree(Location)
    {
        let TreeNode = { Name:path.basename(Location), Type: "Dir", Path: Location, Children:[] }
        let Locations = fs.readdirSync(Location);
        for(let i in Locations)
        {
            if(fs.statSync(Location + "/" +Locations[i]).isFile())
            {
                TreeNode.Children.push({ Name: Locations[i], Type:"File", Extension:path.extname(Locations[i]), Path:Location + "/" + Locations[i], Value:null });
            }
            else
            {
                TreeNode.Children.push(this.ReadDirectoryTree(Location + "/" + Locations[i]));
            }
        }
        return TreeNode;
    }
}

module.exports = FileSystem;