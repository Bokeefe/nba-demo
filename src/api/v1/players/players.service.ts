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
      return await this.bdl.nba.getPlayers();
    } catch (error) {
      throw new Error(`Failed to fetch players: ${error.message}`);
    }
  }
}
