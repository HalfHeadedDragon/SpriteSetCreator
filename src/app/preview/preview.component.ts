import { Component, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { DomSanitizer } from '@angular/platform-browser';

import { Document } from "./../document";

@Component(
{
    selector: 'preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent
{
    private _Name:string;
    private _Exposure:boolean;
    public get Name():string { return this._Name; }
    public get Exposure():boolean { return this._Exposure; }
    @Input() Document:Document;
    public constructor(private _ElectronService: ElectronService, private Sanitizer:DomSanitizer) 
    {
        this._Name = "Sprite";
        this._Exposure = false;
    }
    public ngOnInit() : void {}
    private Sanitize(Url:string)
    {
        return this.Sanitizer.bypassSecurityTrustResourceUrl(Url);
    }
    private ToggleSprite()
    {
        this._Exposure = false;
    }
    private ToggleExposure()
    {
        this._Exposure = true;
    }
    public Export()
    {
        let Items;
        if(this._Exposure) Items = this.Document.Exposure;
        else
        {
            Items = this.Document.Images;
            for(let i = 0; i < Items.length; i++)
            {
                let Num:number = i+1;
                Items[i].Name = this.Name + Num;
            }
        }
        if(this._ElectronService.isElectronApp)
        {
            this._ElectronService.ipcRenderer.send("export-images", Items);
        }
    }
}
