import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/interfaces/user";
import { AddToFavoritesService } from "src/app/services/add-to-favorites.service";
 
@Component({
    selector: 'app-abc',
    templateUrl: './abc.component.html',
    styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {   
    constructor(private http: HttpClient, private userService: UserService, private addToFavs: AddToFavoritesService) { }

    user!: User
    id: string = '1'
    loading: boolean = true

    ngOnInit() {
        this.userService.getUserById$(this.id)
            .subscribe({
                next:(response) => {
                this.user = response
                },
                error:(err) => { console.log(err) },
                complete:() => {
                    console.log('Finished')
                    this.loading = false
                } 
                
            })
    }

    handleAddToFavs() {
        this.addToFavs.addToFavorites()
    }
}

