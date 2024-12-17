import { BalldontlieAPI } from "@balldontlie/sdk";
import { Injectable } from "@nestjs/common";
import { of } from "rxjs";
import { BDL_KEY } from "secrets";

@Injectable()
export class PlayersService {
  private bdl: BalldontlieAPI;

  constructor() {
    this.bdl = new BalldontlieAPI({ apiKey: BDL_KEY });
  }

  async getPlayers() {
    try {
      const res = await this.bdl.nba.getPlayers();
      return res.data;
    } catch (error) {
      throw new Error(`players fetch error: ${error.message}`);
    }
  }

  async getPlayersByTeamId(teamId: number | string) {
    try {
      const numericTeamId = Number(teamId);

      if (isNaN(numericTeamId)) {
        throw new Error("Invalid teamId: string or number");
      }

      const res = (await this.bdl.nba.getPlayers()).data.filter((player) => {
        return player.team.id === numericTeamId;
      });
      return res;
    } catch (error) {
      throw new Error(`players fetch error: ${error.message}`);
    }
  }
}
