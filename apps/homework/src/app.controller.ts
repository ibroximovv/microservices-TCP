import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  createUser(@Body() data: CreateUserDto) {
    return this.appService.createUser(data)
  }

  @Get('user')
  getAllUser() {
    return this.appService.getAllUser()
  }

  @Get('user-one')
  getOneUser(@Param('id') id: string) {
    return this.appService.getOneUser(+id)
  }

  @Patch('user')
  updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.appService.updateUser(+id, data)
  }

  @Delete('user')
  deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(+id)
  }

  @Post('product')
  createProduct(@Body() data: CreateProductDto) {
    return this.appService.createProduct(data)
  }

  @Get('product')
  getAllProducts() {
    return this.appService.getAllProducts()
  }

  @Get('product-one')
  getOneProduct(@Param('id') id: string) {
    return this.appService.getoneProduct(+id)
  }

  @Patch('product')
  updateProduct(@Param('id') id: string, @Body() data: UpdateProductDto) {
    return this.appService.updateProduct(+id, data)
  }

  @Delete('product')
  deleteProduct(@Param('id') id: string) {
    return this.appService.deleteProduct(+id)
  }
}
