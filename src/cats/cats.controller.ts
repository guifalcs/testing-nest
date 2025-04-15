import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get(':id')
  findAll(@Param('id') id: string): string[] {
    if (id) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.catsService.findAll();
  }
}
