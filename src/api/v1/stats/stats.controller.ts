import { Controller, Get, Query } from "@nestjs/common";
import { StatsService } from "./stats.service";

@Controller("api/v1/stats")
export class StatsController {
  constructor(private statsService: StatsService) {}
  @Get("drafts-by-team")
  getDraftRoundsByTeam(@Query("teamName") teamName: string) {
    return this.statsService.getDraftRoundsByTeam(teamName);
  }
}
