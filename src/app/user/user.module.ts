import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserListComponent
  ]
})
export class UserModule { }
