import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';



@Controller('user')
export class AppController {

  
  constructor(private readonly appService: AppService) { }


  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }


  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.findOneById(id);
  }


  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string){
      return this.appService.remove(id)
  }


}
