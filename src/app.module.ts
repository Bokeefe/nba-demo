import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";

import { ConfigModule } from "@nestjs/config";
import { TeamsService } from "./api/v1/teams/teams.service";
import { TeamsController } from "./api/v1/teams/teams.controller";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlayersController } from "./api/v1/players/players.controller";
import { PlayersService } from "./api/v1/players/players.service";

@Module({
  imports: [HttpModule, ConfigModule.forRoot({ isGlobal: true })],
  providers: [TeamsService, AppService, PlayersService],
  exports: [],
  controllers: [TeamsController, AppController, PlayersController],
})
export class AppModule {}
