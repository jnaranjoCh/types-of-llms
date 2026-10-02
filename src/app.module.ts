import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HistorialModule } from './historial/historial.module';
import { OrchestratorModule } from './orchestrator/orchestrator.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TemasModule } from './temas/temas.module';
import { AgentModule } from './agent/agent.module';
import { RoleModule } from './role/role.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'types-of-llms',
    }),
    MongooseModule.forRoot(process.env.DB_CONNECTION || ''),
    UserModule,
    HistorialModule,
    OrchestratorModule,
    AuthModule,
    TemasModule,
    AgentModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
