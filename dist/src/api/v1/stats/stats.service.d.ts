import { PlayersService } from "../players/players.service";
import { TeamsService } from "../teams/teams.service";
export declare class StatsService {
    private playersService;
    private teamsService;
    constructor(playersService: PlayersService, teamsService: TeamsService);
    getDraftRoundsByTeam(teamName: string): Promise<{
        "Team Name": string;
        "Draft Rounds": {
            draftCount: {
                1: number;
                2: number;
                null: number;
            };
        };
    }>;
}
