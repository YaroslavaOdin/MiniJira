import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit(): void { }

  add(name:string, surname: string) {
    if (!name || !surname) { return; }
    this.UserService.addUser(name, surname);
    
  }

}
