import { Controller, Get, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TemasService } from './temas.service';
import { AuthGuard } from '../auth/auth.guard';
import { AuthenticatedRequest, CurrentUser } from '../user/decorator/user.decorator';

@Controller('temas')
export class TemasController {
  constructor(private readonly temasService: TemasService) {}

  @UseGuards(AuthGuard)
  @Get('by-user')
  async findAllByUser(@CurrentUser() request: AuthenticatedRequest) {
    const userId = request.userId;
    return this.temasService.findAllByUser(userId);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.temasService.remove(id);
  }
}
