import { Controller, Get, Param, Query } from "@nestjs/common";
import { TeamsService } from "./teams.service";

@Controller("api/v1/teams")
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get("")
  getTeams() {
    return this.teamsService.getTeams();
  }

  @Get("draft-stats")
  async getDraftTeam(@Query("teamName") teamName: string) {
    console.log(teamName);
    return this.teamsService.getTeamDrafts(teamName);
  }

  @Get("test")
  getTest() {
    return this.teamsService.getTest();
  }
}
