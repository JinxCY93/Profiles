import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router'
import { UserListComponent } from '../user-list/user-list.component'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  specificProfiles = null
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.userId)
    setTimeout(() => {
      this.profileService.getProfileDetails(this.route.snapshot.params.userId).subscribe(
        response => {
          this.specificProfiles = response
          console.log(this.specificProfiles)
        })
    }, 2000)
  }
}
