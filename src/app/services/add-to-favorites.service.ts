import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToFavoritesService {

  constructor() { }

  addToFavorites() {
    alert('Added to favs')
  }
}
