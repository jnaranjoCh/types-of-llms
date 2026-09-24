import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TemasService } from './temas.service';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('temas')
export class TemasController {
  constructor(private readonly temasService: TemasService) {}

  @UseGuards(AuthGuard)
  @Get(':userId')
  findAllByUser() {
    return this.temasService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temasService.remove(+id);
  }
}
