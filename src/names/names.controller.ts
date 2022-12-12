import { Controller, Get } from '@nestjs/common';
import { NamesService } from './names.service';
import { Param, Query } from '@nestjs/common';

@Controller('names')
export class NamesController {
  constructor(private readonly namesService: NamesService) {}

  @Get('/:count')
  generateCount(
    @Param('count') count: number,
    @Query('scramble') scramble: boolean,
  ): any {
    return this.namesService.generateCount(count, scramble);
  }

  @Get('/:sex/:count')
  generateCountOfSex(
    @Param('sex') sex: string,
    @Param('count') count: number,
    @Query('scramble') scramble: boolean,
  ): any {
    return this.namesService.generateCountOfSex(sex, count, scramble);
  }
}
