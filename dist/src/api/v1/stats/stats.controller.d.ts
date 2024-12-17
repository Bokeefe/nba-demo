import { StatsService } from "./stats.service";
export declare class StatsController {
    private statsService;
    constructor(statsService: StatsService);
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
