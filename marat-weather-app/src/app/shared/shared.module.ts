import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-mattirial/angular-material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AngularMaterialModule],
})
export class SharedModule {}
