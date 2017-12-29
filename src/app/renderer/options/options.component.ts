import { Component, Input } from '@angular/core';

import { Renderer } from "./../renderer";

@Component(
{
    selector: 'options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent
{
    @Input() Renderer:Renderer;
    public constructor() {}
    public ngOnInit() : void 
    {
        
    }
}
