import {User} from "../models/User.model";
import {Subject} from "rxjs";

export class UserService {

  private users: User[] = [
    new User('Nathan', 'Ferrer', 'nathou@nathan.fr', 'eau', ['coder', 'sport'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
