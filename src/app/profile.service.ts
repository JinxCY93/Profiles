import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const profileUrl = 'https://insta.nextacademy.com/api/v1/users'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  getProfiles() {
    return this.http.get(profileUrl)
  }
}
