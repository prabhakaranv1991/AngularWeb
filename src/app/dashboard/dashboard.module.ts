import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostcounterComponent } from './postcounter/postcounter.component';

@NgModule({
  declarations: [
    DetailsComponent,
    HistoryComponent,
    PostComponent,
    PostcounterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[
    DetailsComponent,
    HistoryComponent,
    PostComponent,
  ]
})
export class DashboardModule { }
