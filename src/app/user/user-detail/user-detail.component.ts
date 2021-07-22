import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User, Specialization } from 'src/app/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user?: User;

  public specializationUser: string[] = Object.keys(Specialization);
  public selectedSpecialization?:string = '';

  constructor(private UserService: UserService) {

  }

  ngOnInit(): void {
  }

  saveChange(user:User):void {
    this.UserService.updateUser(user);
  }

}
