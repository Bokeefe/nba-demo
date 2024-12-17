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
exports.PlayersService = void 0;
const sdk_1 = require("@balldontlie/sdk");
const common_1 = require("@nestjs/common");
const secrets_1 = require("../../../../secrets");
let PlayersService = class PlayersService {
    constructor() {
        this.bdl = new sdk_1.BalldontlieAPI({ apiKey: secrets_1.BDL_KEY });
    }
    async getPlayers() {
        try {
            return await this.bdl.nba.getPlayers();
        }
        catch (error) {
            throw new Error(`Failed to fetch players: ${error.message}`);
        }
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PlayersService);
//# sourceMappingURL=players.service.js.map