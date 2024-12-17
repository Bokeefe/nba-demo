"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsService = void 0;
const common_1 = require("@nestjs/common");
const players_service_1 = require("../players/players.service");
const teams_service_1 = require("../teams/teams.service");
let StatsService = class StatsService {
    constructor(playersService, teamsService) {
        this.playersService = playersService;
        this.teamsService = teamsService;
    }
    async getDraftRoundsByTeam(teamName) {
        const teams = await this.teamsService.getTeams();
        const team = teams.find((t) => t.full_name.toLowerCase().includes(teamName.trim().toLowerCase()));
        if (!team) {
            throw new Error("Team not found");
        }
        const players = await this.playersService.getPlayers();
        const teamPlayers = players.filter((p) => p.team.id === team.id);
        const draftCount = { 1: 0, 2: 0, null: 0 };
        teamPlayers.map((player) => {
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
};
exports.StatsService = StatsService;
exports.StatsService = StatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [players_service_1.PlayersService,
        teams_service_1.TeamsService])
], StatsService);
//# sourceMappingURL=stats.service.js.map