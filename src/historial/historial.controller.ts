import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HistorialService } from './historial.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('historial')
export class HistorialController {
  constructor(private readonly historialService: HistorialService) {}


  @UseGuards(AuthGuard)
  @Get(':userId')
  async getHistorialByUserId(@Param('userId') userId: string) {
    //return this.historialService.getHistorialByUserId(userId);
  }
}
