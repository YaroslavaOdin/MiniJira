import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[] = [];
  public user?: User;
  public selectedUser?: User;
  public searchString: string = "";

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.UserService.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  remove(user: User) {
    this.UserService.removeUser(user);
  }

  search(searchUser: any): void {
    this.searchString = searchUser.value; 
  }
}
