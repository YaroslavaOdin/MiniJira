import { Injectable } from '@angular/core';
import { User, Specialization } from 'src/app/models/user'; 
import { USERS } from 'src/app/models/data-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public USERS: User[] = [];

  constructor() { 
    let storageUser = localStorage.getItem('users');
    if (storageUser === null || storageUser === '[]') {
      this.putTasksInStorage(USERS);
    }
  }

  getUsers():User[] {
    let tasksString: string | null = localStorage.getItem('users');
    if (tasksString) {
      this.USERS = JSON.parse(tasksString);
    }
    return this.USERS;
  }

  putTasksInStorage(users:User[]):void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  removeUser(user:User) {
    this.USERS.splice(this.USERS.indexOf(user), 1);
    this.putTasksInStorage(this.USERS);
  }

  updateUser(user: User): void {
    const userIndex = this.USERS.findIndex(item => item.id == user.id);
    this.USERS[userIndex] = user;
    this.putTasksInStorage(this.USERS);
  }

  addUser(name:string, surname:string): void{
    const newUser:User = { id: this.getIdForNewUser(), name: name, surname: surname, specialization: Specialization.FrontEndDev, tasks: []}
    this.USERS.push(newUser);
    this.putTasksInStorage(this.USERS);
  }

  getIdForNewUser():number {
    let id:number = 1;
    if (this.USERS.length) {
      id = this.USERS[this.USERS.length - 1].id + 1;
    } 
    return id;
  }
}
