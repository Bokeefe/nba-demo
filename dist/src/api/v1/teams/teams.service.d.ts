export declare class TeamsService {
    private bdl;
    constructor();
    getTeams(): Promise<import("@balldontlie/sdk").ApiResponse<import("@balldontlie/sdk").NBATeam[]>>;
    getTest(): Promise<import("rxjs").Observable<{
        test: string;
    }>>;
}
