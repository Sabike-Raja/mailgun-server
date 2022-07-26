import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

class CreateCatDto {
  seceret: string;
  domain: number;
  email: string;
  otp: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.appService.saveConfiguration(createCatDto);
    this.appService.sendOtp({
      email: createCatDto.email,
      otp: createCatDto.otp,
    });
    return 'Success';
  }
}
