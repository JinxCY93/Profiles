import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  profiles = []
  ids = []
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfiles()
  }
  getProfiles() {
    // this.profileService.getProfiles().subscribe((Response) => console.log(Response));
    this.profileService.getProfiles().subscribe(response => {
      let profileName = []
      for (let profile of response) {
        profileName.push(profile)
      }
      this.profiles = profileName
      console.log(this.profiles)
    })
  }

}
