import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    TaskModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
