import { Component, Input } from '@angular/core';

import { CameraController } from "./camera.controller";

@Component(
{
    selector: 'camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.css']
})
export class CameraComponent
{
    @Input() Camera:CameraController;
    public constructor() {}
    public ngOnInit() : void 
    {
        
    }
}
