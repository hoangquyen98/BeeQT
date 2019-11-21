import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProductsManagementComponent } from './components/products-management/products-management.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { PostsManagementComponent } from './components/post/posts-management/posts-management.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  declarations: [
    FooterAdminComponent,
    NavbarComponent,
    SidebarComponent,
    UserProfileComponent,
    ProductsManagementComponent,
    UsersManagementComponent,
    PostsManagementComponent,
    PostCreateComponent,
    PostListComponent,
    AdminLayoutComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
