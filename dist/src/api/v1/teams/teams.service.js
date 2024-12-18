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
exports.TeamsService = void 0;
const sdk_1 = require("@balldontlie/sdk");
const common_1 = require("@nestjs/common");
const secrets_1 = require("../../../../secrets");
let TeamsService = class TeamsService {
    constructor() {
        this.bdl = new sdk_1.BalldontlieAPI({ apiKey: secrets_1.BDL_KEY });
    }
    async getTeams() {
        try {
            const res = await this.bdl.nba.getTeams();
            return res.data;
        }
        catch (error) {
            throw new Error(`Failed to fetch teams: ${error.message}`);
        }
    }
    async getTeamDrafts(teamName) {
        if (!teamName) {
            throw new common_1.NotFoundException(`Team name "${teamName}" invalid`);
        }
        const teams = this.getTeams();
        const team = (await teams).find((team) => team.full_name.toLowerCase().includes(teamName.trim().toLowerCase()));
        if (!team) {
            throw new common_1.NotFoundException(`Team "${teamName}" not found`);
        }
        return { teamName: team.full_name };
    }
};
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TeamsService);
//# sourceMappingURL=teams.service.js.map