import 'bootstrap/dist/css/bootstrap.css';
import { Component, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { Document } from "./document";

@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public Document:Document;
  private _Title:string;
  private _SideBarOption:number;
  public get SideBarOption():number { return this._SideBarOption; }
  public constructor(private _ElectronService: ElectronService, private _Zone:NgZone)
  {
    this.Document = new Document();
    this._Title = 'HHD - SpriteSet Creator';
    this._SideBarOption = 0;
  }
  public ngOnInit() : void
  {
    if(this._ElectronService.isElectronApp)
    {
        this._ElectronService.ipcRenderer.on('model-load' , this.ImportModelHandler.bind(this));
        this._ElectronService.ipcRenderer.on('texture-load' , this.ImportTextureHandler.bind(this));
    }
  }
  private ImportModelHandler(Event, Data) { this._Zone.run(function() { this.ImportModel(Data) }.bind(this));}
  private ImportTextureHandler(Event, Data) { this._Zone.run(function() { this.ImportTexture(Data) }.bind(this));}
  private ImportModel(Path)
  {
    this.Document.ImportModel(Path);
  }
  private ImportTexture(Path)
  {
    this.Document.ImportTexture(Path);
  }
  private SelectOption(Option:number) : void
  {
    if(Option == this._SideBarOption) this._SideBarOption = -1;
    else this._SideBarOption = Option;
  }
}
