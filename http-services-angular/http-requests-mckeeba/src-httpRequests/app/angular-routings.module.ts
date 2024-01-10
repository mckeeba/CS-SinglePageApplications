import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { PostCreateComponent } from "./post-create/post-create.component";
import { NgModule } from "@angular/core";
import { PostEditComponent } from "./post-edit/post-edit.component";

const routes: Routes = [
    { path: "", redirectTo: "blog", pathMatch: "full" },
    { path: "blog", component: BlogComponent },
    { path: "posts/edit/:postTitle", component: PostEditComponent },
    { path: "posts/create", component: PostCreateComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}