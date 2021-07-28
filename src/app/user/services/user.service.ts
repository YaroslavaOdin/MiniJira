import { Injectable } from '@angular/core';
import { User, Specialization } from 'src/app/models/user'; 
import { USERS } from 'src/app/models/data-user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USERS: User[] = [];
  private _users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public users$ = this._users$.asObservable();

  constructor() { 
    let storageUser = this.getUsers();
    this._users$.next(storageUser);
    if (storageUser === null || storageUser === []) {
      this.putTasksInStorage(USERS);
    }
  }

  getUsers():User[] {
    let usersString: string | null = localStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      return users;
    }
    return [];
  }

  putTasksInStorage(users:User[]):void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  removeUser(user:User) {
    this.USERS.splice(this.USERS.indexOf(user), 1);
    this.putTasksInStorage(this.USERS);
    this._users$.next(this.USERS);
  }

  updateUser(user: User): void {
    const userIndex = this.USERS.findIndex(item => item.id == user.id);
    this.USERS[userIndex] = user;
    this.putTasksInStorage(this.USERS);
    this._users$.next(this.USERS);
  }

  addUser(name:string, surname:string): void {
    const users = this.getUsers();
    const newUser:User = { id: this.getIdForNewUser(), name: name, surname: surname, specialization: Specialization.FrontEndDev, tasks: []}
    users.push(newUser);
    this.putTasksInStorage(users);
    this._users$.next(users);
  }

  getIdForNewUser():number {
    let id:number = 1;
    if (this.USERS.length) {
      id = this.USERS[this.USERS.length - 1].id + 1;
    } 
    return id;
  }
}
