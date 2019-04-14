import { Component, OnInit } from '@angular/core'
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails = []
  profiles = []
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    // this.getProfiles()
    // this.getUserDetails()
  }

  // getProfiles() {
  //   this.profileService.getProfiles().subscribe((Response) => console.log(Response));
  //   this.profileService.getProfiles().subscribe(response => {
  //     let profileId = []
  //     for (let profile of response) {
  //       profileId.push(profile.id)
  //     }
  //     this.profiles = profileId
  //   })
  // }

  // getUserDetails() {
  //   this.profileService.getProfileDetails().subscribe(response => {
  //     let profileResults = []
  //     for (let profile of response) {
  //       profileResults.push(profile + `/${this.profiles}`)
  //     }
  //     this.userDetails = profileResults
  //   })
  // }
}
