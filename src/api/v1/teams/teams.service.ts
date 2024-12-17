import { BalldontlieAPI } from "@balldontlie/sdk";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { of } from "rxjs";
import { BDL_KEY } from "secrets";

@Injectable()
export class TeamsService {
  private bdl: BalldontlieAPI;

  constructor() {
    this.bdl = new BalldontlieAPI({ apiKey: BDL_KEY });
  }

  async getTeams() {
    try {
      return await this.bdl.nba.getTeams();
    } catch (error) {
      throw new Error(`Failed to fetch teams: ${error.message}`);
    }
  }

  async getTest() {
    try {
      return await of({ test: "success" });
    } catch (error) {
      throw new Error(`Failed to fetch teams: ${error.message}`);
    }
  }
}
