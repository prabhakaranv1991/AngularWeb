import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavcontentComponent } from './navcontent/navcontent.component';



@NgModule({
  declarations: [NavcontentComponent],
  imports: [
    CommonModule
  ],
  exports:[NavcontentComponent]
})
export class ComponentsModule { }
