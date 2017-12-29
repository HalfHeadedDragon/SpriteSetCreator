import { Component, Input } from '@angular/core';

import { ModelsController } from "./../models/models.controller";

@Component(
{
    selector: 'transformations',
    templateUrl: './transformations.component.html',
    styleUrls: ['./transformations.component.css']
})
export class TransformationsComponent
{
    @Input() Models:ModelsController;
    public constructor() {}
    public ngOnInit() : void 
    {
        
    }
}
