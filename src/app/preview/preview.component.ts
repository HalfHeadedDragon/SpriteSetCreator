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
    public Exposure:boolean;
    @Input() Document:Document;
    public constructor(private Sanitizer:DomSanitizer) 
    {
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
}
