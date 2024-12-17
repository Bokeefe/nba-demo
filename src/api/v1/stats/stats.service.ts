import { Injectable } from "@nestjs/common";
import { PlayersService } from "../players/players.service";
import { TeamsService } from "../teams/teams.service";
import { NBAPlayer } from "@balldontlie/sdk";

@Injectable()
export class StatsService {
  constructor(
    private playersService: PlayersService,
    private teamsService: TeamsService
  ) {}

  async getDraftRoundsByTeam(teamName: string) {
    const teams = await this.teamsService.getTeams();
    const team = teams.find((t) =>
      t.full_name.toLowerCase().includes(teamName.trim().toLowerCase())
    );

    if (!team) {
      throw new Error("Team not found");
    }

    const players = await this.playersService.getPlayers();
    const teamPlayers = players.filter((p) => p.team.id === team.id);
    const draftCount = { 1: 0, 2: 0, null: 0 };

    teamPlayers.map((player: NBAPlayer) => {
      if (player.draft_round === 1) {
        draftCount[1]++;
      }
      if (player.draft_round === 2) {
        draftCount[2]++;
      }
      if (player.draft_round !== 1 && player.draft_round !== 2) {
        draftCount["null"]++;
      }
      return player;
    });

    return {
      "Team Name": team.full_name,
      "Draft Rounds": { draftCount },
    };
  }
}
