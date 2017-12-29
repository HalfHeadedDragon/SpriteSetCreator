import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';

import { AnimationsComponent } from "./renderer/animations/animations.component";
import { CameraComponent } from "./renderer/camera/camera.component";
import { LightComponent } from "./renderer/light/light.component";
import { MaterialsComponent } from "./renderer/materials/materials.component";
import { ModelsComponent } from "./renderer/models/models.component";
import { OptionsComponent } from "./renderer/options/options.component";
import { ReplayComponent } from "./renderer/replay/replay.component";
import { TransformationsComponent } from "./renderer/transformations/transformations.component";

import { RendererComponent } from "./renderer/renderer.component";
import { AppComponent } from './app.component';

@NgModule(
{
  declarations:
  [
    AnimationsComponent,
    CameraComponent,
    LightComponent,
    MaterialsComponent,
    ModelsComponent,
    OptionsComponent,
    ReplayComponent,
    TransformationsComponent,
    RendererComponent,
    AppComponent,
  ],
  imports:
  [
    BrowserModule,
    FormsModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
