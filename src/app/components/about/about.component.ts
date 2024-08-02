import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Test1 } from 'src/app/interfaces/test1';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute) {  }

  staticDataFromRoute: Test1 ={}

  ngOnInit(): void {
    // this.route.data.subscribe((data) => console.log('about route', data))

    this.route.data.subscribe((data) => this.staticDataFromRoute = data)
    console.log(this.staticDataFromRoute)
  }
  
  handleRedirect() {
    this.router.navigate(['users'])
  }
}
