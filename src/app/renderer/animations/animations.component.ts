import { Component, Input } from '@angular/core';

import { AnimationsController } from "./animations.controller";

@Component(
{
    selector: 'animations',
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.css']
})
export class AnimationsComponent
{
    public Weights:number[];
    @Input() Animations:AnimationsController;
    public constructor() {}
    public ngOnInit() : void 
    {
        this.Weights = this.Animations.Weights;
    }
}
