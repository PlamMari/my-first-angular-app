import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {
  movies: string[] = ['Movie 1', 'Movie 2', 'Movie 3']
  hasUser: boolean = true
  toggleHasUser(): void {
    this.hasUser = !this.hasUser
  }
}