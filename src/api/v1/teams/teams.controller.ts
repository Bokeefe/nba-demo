import { Controller, Get } from "@nestjs/common";
import { TeamsService } from "./teams.service";

@Controller("api/v1/teams")
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get("")
  getTeams() {
    return this.teamsService.getTeams();
  }

  @Get("test")
  getTest() {
    return this.teamsService.getTest();
  }
}
