import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FyleSystemService } from './services/file-system/fyle-system.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FyleSystemService
  ]
})
export class SharedModule { }
