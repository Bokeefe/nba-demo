import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
export declare class ApiService {
    private httpService;
    private readonly apiUrl;
    constructor(httpService: HttpService);
    getTeams(): Observable<any>;
}
