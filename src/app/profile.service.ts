import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const profileUrl = 'https://insta.nextacademy.com/api/v1/users'
const detailsUrl = 'https://insta.nextacademy.com/api/v1/images/?userId='
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  getProfiles() {
    return this.http.get(profileUrl)
  }

  getProfileDetails(userId) {
    return this.http.get(detailsUrl + `${userId}`)
  }
}
