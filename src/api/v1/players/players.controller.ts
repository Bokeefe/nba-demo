import { Controller, Get, Query } from "@nestjs/common";
import { PlayersService } from "./players.service";

@Controller("api/v1/players")
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get("")
  getPlayers() {
    return this.playersService.getPlayers();
  }

  @Get("team")
  async getTeamPlayersById(@Query("id") id: number) {
    return this.playersService.getPlayersByTeamId(id);
  }
}
