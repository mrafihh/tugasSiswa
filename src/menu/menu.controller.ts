import { Controller, Get, Param, Post, Put, Req, Query } from '@nestjs/common';
import { Delete, Request } from '@nestjs/common';

@Controller('menu')
export class UserController {
    @Get('all')
  findAll(@Req () request: Request): string {
    return 'This action returns all cats';
  }
  @Post()
  create(): string {
    return 'this action adds a new menu';
  }
  
  @Put(':id')
  update(@Param('id') id: string): string {
    return `this action update user id ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `This action delete user id ${id}`;
  }
  @Get()
    find(@Query('breed') breed: string, @Query('age') age: number): string {
        return `This action returns user filtered by name: ${name}`;
    }
}