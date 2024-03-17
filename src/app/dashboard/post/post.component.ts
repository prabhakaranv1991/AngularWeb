import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  postCompModel:FormGroup;
  count:number = 0;
  @Output() 
  postCount = new EventEmitter<number>();

  constructor(private router:Router)
  {
    this.postCompModel = new FormGroup(
      {
        title:new FormControl("",Validators.required),
        story:new FormControl("",Validators.required)
      }
    )
  }

  upload()
  {
    if(this.postCompModel.valid)
    {
      console.log("Valid post");
      this.count++;
      this.postCount.emit(this.count);
      this.postCompModel.reset();
    }
    this.router.navigate(["dashboard"]);


  }

}
