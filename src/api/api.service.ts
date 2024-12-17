import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class ApiService {
  private readonly apiUrl = "https://api.example.com";

  constructor(private httpService: HttpService) {}

  getTeams(): Observable<any> {
    return this.httpService
      .get(`${this.apiUrl}/teams`)
      .pipe(map((response) => response.data));
  }
}
