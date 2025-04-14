import { Controller, Get } from '@nestjs/common';

@Controller('teste')
export class TesteController {
  @Get('')
  get(): string {
    return 'teste';
  }
}
