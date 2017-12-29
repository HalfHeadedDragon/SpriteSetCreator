import { Component, Input } from '@angular/core';

import { AnimationsController } from "./../animations/animations.controller";

@Component(
{
    selector: 'replay',
    templateUrl: './replay.component.html',
    styleUrls: ['./replay.component.css']
})
export class ReplayComponent
{
    @Input() Animations:AnimationsController;
    public constructor() {}
    public ngOnInit() : void 
    {
        
    }
}
