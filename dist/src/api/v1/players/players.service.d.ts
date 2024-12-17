export declare class PlayersService {
    private bdl;
    constructor();
    getPlayers(): Promise<import("@balldontlie/sdk").NBAPlayer[]>;
    getPlayersByTeamId(teamId: number | string): Promise<import("@balldontlie/sdk").NBAPlayer[]>;
}
