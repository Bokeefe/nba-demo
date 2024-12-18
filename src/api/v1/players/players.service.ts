import { BalldontlieAPI } from "@balldontlie/sdk";
import { Injectable } from "@nestjs/common";
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
}
