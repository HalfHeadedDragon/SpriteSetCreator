import { Component, Input } from '@angular/core';

import { ModelsController } from "./models.controller";

@Component(
{
    selector: 'models',
    templateUrl: './models.component.html',
    styleUrls: ['./models.component.css']
})
export class ModelsComponent
{
    @Input() Models:ModelsController;
    public constructor() {}
    public ngOnInit() : void 
    {
        console.log(this.Models);
    }
}
