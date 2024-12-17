import { NBATeam } from "@balldontlie/sdk";
export declare class TeamsService {
    private bdl;
    constructor();
    getTeams(): Promise<NBATeam[]>;
    getTeamDrafts(teamName: string): Promise<{
        teamName: string;
    }>;
    getTest(): Promise<import("rxjs").Observable<{
        test: string;
    }>>;
}
