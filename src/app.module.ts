import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";

import { ConfigModule } from "@nestjs/config";
import { TeamsService } from "./api/v1/teams/teams.service";
import { TeamsController } from "./api/v1/teams/teams.controller";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlayersController } from "./api/v1/players/players.controller";
import { PlayersService } from "./api/v1/players/players.service";
import { StatsController } from "./api/v1/stats/stats.controller";
import { StatsService } from "./api/v1/stats/stats.service";

@Module({
  imports: [HttpModule, ConfigModule.forRoot({ isGlobal: true })],
  providers: [TeamsService, AppService, PlayersService, StatsService],
  exports: [],
  controllers: [
    TeamsController,
    AppController,
    PlayersController,
    StatsController,
  ],
})
export class AppModule {}
