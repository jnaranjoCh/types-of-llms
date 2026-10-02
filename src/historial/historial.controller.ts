import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { HistorialService } from './historial.service';
import { AuthGuard } from '../auth/auth.guard';
import { HistorialDto } from './dto/historial.dto';

@Controller('historial')
export class HistorialController {
  constructor(private readonly historialService: HistorialService) {}


  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get(':idTema')
  async getHistorialByUserId(@Param('idTema') idTema: string) {
    return this.historialService.getHistorialByidTema(idTema);
  }

  @UseGuards(AuthGuard)
  @Post('create')
  async createHistorial(@Body() createHistorialDto: HistorialDto) {
    return this.historialService.createHistorial(createHistorialDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.historialService.remove(id);
  }
}
