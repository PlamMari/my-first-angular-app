import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit{
  constructor(private userService : UserService) {  }

  // users: User[] = [{
  //   id: '1',
  //   name: 'Mariya',
  //   email: 'mariya@abv.bg'
  // },
  // {
  //   id: '2',
  //   name: 'Ivan', 
  //   email: 'ivan@abv.bg'
  // },
  // {
  //   id: '3',
  //   name: 'Pesho', 
  //   email: 'pesho@abv.bg'
  // },
  // {
  //   id: '4',
  //   name: 'Ivona', 
  //   email: 'ivona@abv.bg'
  
  users!: User[]
  ngOnInit() {
    this.userService.getUsers$()
      .subscribe({
        next: (response: User[])=> {
          this.users = response
          console.log('FROM NEXT', this.users);
      },
        error: (error: Error) => { console.log(error)},
        complete: () => { console.log('from complete - finished') }
    })
    console.log('this.users -', this.users)
  } 

  handleAddNewUser(newUser: User): void {
    //this.users.push(newUser)
  }

  
}
