import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { DetailsComponent } from "./dashboard/details/details.component";
import { PostComponent } from "./dashboard/post/post.component";

const pathConfig:Routes=[
    {path:"",pathMatch:"full",redirectTo:"dashboard"},
    {path:"dashboard",component:DetailsComponent,children:[
        {path:"addPost",component:PostComponent},
        
    ]}
];

@NgModule({
    imports:[
        RouterModule.forRoot(pathConfig),
    ],
    exports:[RouterModule],
    
})
export class AppRoutingModule
{


}