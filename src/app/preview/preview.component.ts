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
    public Name:string;
    public Exposure:boolean;
    @Input() Document:Document;
    public constructor(private _ElectronService: ElectronService, private Sanitizer:DomSanitizer) 
    {
        this.Name = "Sprite";
        this.Exposure = false;
    }
    public ngOnInit() : void {}
    private Sanitize(Url:string)
    {
        return this.Sanitizer.bypassSecurityTrustResourceUrl(Url);
    }
    private ToggleSprite()
    {
        this.Exposure = false;
    }
    private ToggleExposure()
    {
        this.Exposure = true;
    }
    public Export()
    {
        let Items;
        if(this.Exposure) Items = this.Document.Exposition;
        else
        {
            Items = this.Document.Images;
            for(let i in Items)
            {
                let Num = i+1;
                Items[i].Name = this.Name + Num;
            }
        }
        if(this._ElectronService.isElectronApp)
        {
            this._ElectronService.ipcRenderer.send("export-images", Items);
        }
    }
}
