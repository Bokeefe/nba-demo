import { PlayersService } from "./players.service";
export declare class PlayersController {
    private playersService;
    constructor(playersService: PlayersService);
    getPlayers(): Promise<import("@balldontlie/sdk").NBAPlayer[]>;
    getTeamPlayersById(id: number): Promise<import("@balldontlie/sdk").NBAPlayer[]>;
}
