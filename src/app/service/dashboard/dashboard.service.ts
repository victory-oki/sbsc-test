import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Endpoints } from "src/app/models/shared/endpoint";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}
  Endpoints = new Endpoints();

  getDashboardDetails(): Observable<any> {
    const requestUrl = this.Endpoints.serverEndpoint + "dashboard";
    return this.httpClient.get<any>(requestUrl);
  }
}
