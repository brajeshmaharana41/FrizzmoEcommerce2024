import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GApiService {

  private auth2: gapi.auth2.GoogleAuth
  private scope = [
    "https://www.googleapis.com/auth/classroom.profile.emails",
    "https://www.googleapis.com/auth/classroom.profile.photos",
    "https://www.googleapis.com/auth/classroom.rosters",
    "https://www.googleapis.com/auth/classroom.rosters.readonly",
    "https://www.googleapis.com/auth/classroom.courses.readonly"
  ].join(" ")

  constructor() {
    gapi.load('client', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.google.client_id,
        scope: this.scope
      })
      gapi.client.init({
        apiKey: environment.google.api_key,
        discoveryDocs: ["https://classroom.googleapis.com/$discovery/rest"],
      })
    })
  }

  public signin() {
    return new Promise((resolve, reject) => {
      this.auth2.signIn({ scope: this.scope }).then(user => {
        resolve(user)
      }).catch(error => {
        console.log(error)
      })
    })
  }

  public list(): Promise<gapi.client.classroom.ListCoursesResponse> {
    return new Promise((resolve, reject) => {
      gapi.client.classroom.courses.list({
        pageSize: 10
      }).then((response: any) => {
        resolve(response.result)
      }).catch(error => {
        reject(error)
      })
    })
  }

  public students(id: string): Promise<gapi.client.classroom.ListStudentsResponse> {
    return new Promise((resolve, reject) => {
      gapi.client.classroom.courses.students.list({
        courseId: id
      }).then((response: any) => {
        resolve(response.result)
      }).catch(error => {
        reject(error)
      })
    })
  }

}
