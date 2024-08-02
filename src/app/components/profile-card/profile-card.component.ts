import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})

export class ProfileCardComponent implements OnInit, OnDestroy {

  ngOnInit() {
    console.log('Profile card component initialized')
  }

  ngOnDestroy() {
    console.log('Profile card component destroyed')
  }

  isMale: boolean = true
  profileImgUrlMale: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRgkDv647tcw5sAPJxDPnwGw0Mxekn2eiOA&usqp=CAU'
  profileImgUrlFemale: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZZjCVY3Vso1TaDpoGzC3ix8dMXNg93-mgw&usqp=CAU' 
}
