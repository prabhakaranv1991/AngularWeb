import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postcounter',
  templateUrl: './postcounter.component.html',
  styleUrls: ['./postcounter.component.css']
})
export class PostcounterComponent {

  @Input()
  postsCount:number=0;

  updatCount(count:number){
    this.postsCount=count;

  }

}
