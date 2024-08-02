import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() userData!: User
  @Output() newUser = new EventEmitter<User>();

  currentDate: Date = new Date()
  pipeText: string = 'Lorem ipsum dolor sit amet ...';

  ngOnInit(): void {
    // console.log('currentDate - ', this.currentDate)
  }

  addNewUser(newUserName: HTMLInputElement, newUserEmail: HTMLInputElement, newUserId: HTMLInputElement) {

    const newName = newUserName.value
    const email = newUserEmail.value
    const id = newUserId.value

    this.newUser.emit({
      id,
      name: newName,
      email
    })
  }

  showUserDetails() {    
    // this.router.navigate([`/users/${this.userData.id}`])
    this.router.navigateByUrl(`/users/${this.userData.id}`, {state: this.userData})
  }
}
