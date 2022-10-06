import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DComponent } from './d.component';



@NgModule({
  declarations: [
    DComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DComponent
  ]
})
export class FeatureDModule { }
