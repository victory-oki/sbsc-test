import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "src/app/models/shared/endpoint";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  Endpoints = new Endpoints();

  login(user): Observable<any> {
    console.log(user);
    const requestUrl = this.Endpoints.serverEndpoint + "login";
    return this.httpClient.post<any>(requestUrl, user);
  }
}
