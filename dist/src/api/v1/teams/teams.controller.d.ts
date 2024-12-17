import { TeamsService } from "./teams.service";
export declare class TeamsController {
    private teamsService;
    constructor(teamsService: TeamsService);
    getTeams(): Promise<import("@balldontlie/sdk").ApiResponse<import("@balldontlie/sdk").NBATeam[]>>;
    getTest(): Promise<import("rxjs").Observable<{
        test: string;
    }>>;
}
