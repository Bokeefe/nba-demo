"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const teams_service_1 = require("./api/v1/teams/teams.service");
const teams_controller_1 = require("./api/v1/teams/teams.controller");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const players_controller_1 = require("./api/v1/players/players.controller");
const players_service_1 = require("./api/v1/players/players.service");
const stats_controller_1 = require("./api/v1/stats/stats.controller");
const stats_service_1 = require("./api/v1/stats/stats.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, config_1.ConfigModule.forRoot({ isGlobal: true })],
        providers: [teams_service_1.TeamsService, app_service_1.AppService, players_service_1.PlayersService, stats_service_1.StatsService],
        exports: [],
        controllers: [
            teams_controller_1.TeamsController,
            app_controller_1.AppController,
            players_controller_1.PlayersController,
            stats_controller_1.StatsController,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map