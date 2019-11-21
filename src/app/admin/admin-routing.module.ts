import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProductsManagementComponent } from './components/products-management/products-management.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { PostsManagementComponent } from './components/post/posts-management/posts-management.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'users-management', component: UsersManagementComponent },
  { path: 'products-management', component: ProductsManagementComponent },
  { path: 'posts-management', component: PostsManagementComponent },
  { path: 'create-post', component: PostCreateComponent},
  { path: 'edit-post/:postId', component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
