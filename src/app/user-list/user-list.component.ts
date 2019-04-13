import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  profiles = []
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfiles()
  }
  getProfiles() {
    this.profileService.getProfiles().subscribe(response => {
      let profileResults = []
      for (let profile of response.results) {
        profileResults.push(profile.name)
      }
      this.profiles = profileResults
    })
  }
}
