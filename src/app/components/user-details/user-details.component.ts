import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserData } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    console.log('user', this.user);
    this.user = this.router.getCurrentNavigation()?.extras.state
   }

  userId: string = ''
  
  user!: UserData | undefined;
  // user!: User;
  // = {
  //   id: '',
  //   name: '',
  //   email: ''
  //}
  loading: boolean = true;

  ngOnInit() {
    this.userId = this.route.snapshot.params['userId']
    // console.log(this.route.snapshot.params['userId']);
    // this.userService.getUserById$(this.userId)
    //   .subscribe({
    //     next: (response: User) => { 
    //       this.user = response
    //       console.log(this.user);
    //     },
    //     error: (error: Error) => { 
    //       console.log(error);
    //       this.router.navigate(['/'])
    //      },
    //     complete: () => { 
    //       console.log('Done')
    //       this.loading = false
    //     },
    //   })
  }
}
