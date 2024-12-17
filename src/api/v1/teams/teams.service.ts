import { BalldontlieAPI, NBATeam } from "@balldontlie/sdk";
import { Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { of } from "rxjs";
import { BDL_KEY } from "secrets";

@Injectable()
export class TeamsService {
  private bdl: BalldontlieAPI;

  constructor() {
    this.bdl = new BalldontlieAPI({ apiKey: BDL_KEY });
  }

  async getTeams(): Promise<NBATeam[]> {
    try {
      const res = await this.bdl.nba.getTeams();
      return res.data;
    } catch (error) {
      throw new Error(`Failed to fetch teams: ${error.message}`);
    }
  }

  async getTeamDrafts(teamName: string) {
    if (!teamName) {
      throw new NotFoundException(`Team name "${teamName}" invalid`);
    }
    const teams = this.getTeams();
    const team = (await teams).find((team) =>
      team.full_name.toLowerCase().includes(teamName.trim().toLowerCase())
    );
    if (!team) {
      throw new NotFoundException(`Team "${teamName}" not found`);
    }
    return { teamName: team.full_name };
  }

  async getTest() {
    try {
      return await of({ test: "success" });
    } catch (error) {
      throw new Error(`Failed to fetch teams: ${error.message}`);
    }
  }
}
