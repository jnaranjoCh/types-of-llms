import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AgentSchema } from './schema/agent.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Agent', schema: AgentSchema }]),
  ],
  controllers: [AgentController],
  providers: [AgentService],
})
export class AgentModule {}
