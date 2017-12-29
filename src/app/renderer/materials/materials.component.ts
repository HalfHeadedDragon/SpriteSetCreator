import { Component, Input } from '@angular/core';

import { ModelsController } from "./../models/models.controller";

@Component(
{
    selector: 'materials',
    templateUrl: './materials.component.html',
    styleUrls: ['./materials.component.css']
})
export class MaterialsComponent
{
    @Input() Models:ModelsController;
    public constructor() {}
    public ngOnInit() : void 
    {
        
    }
}
