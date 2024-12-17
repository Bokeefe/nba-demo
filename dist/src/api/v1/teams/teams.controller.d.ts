import { TeamsService } from "./teams.service";
export declare class TeamsController {
    private teamsService;
    constructor(teamsService: TeamsService);
    getTeams(): Promise<import("@balldontlie/sdk").NBATeam[]>;
    getDraftTeam(teamName: string): Promise<{
        teamName: string;
    }>;
    getTest(): Promise<import("rxjs").Observable<{
        test: string;
    }>>;
}
