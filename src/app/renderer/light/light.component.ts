import { Component, Input } from '@angular/core';

import { LightController } from "./light.controller";

@Component(
{
    selector: 'light',
    templateUrl: './light.component.html',
    styleUrls: ['./light.component.css']
})
export class LightComponent
{
    @Input() Light:LightController;
    public constructor() {}
    public ngOnInit() : void 
    {
        
    }
}
