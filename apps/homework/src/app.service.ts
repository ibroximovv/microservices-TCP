import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('USERS') private readonly users: ClientProxy,
    @Inject('PRODUCTS') private readonly products: ClientProxy
  ){}

  createUser(data: CreateUserDto) {
    return this.users.send('create-user', {data})
  }

  getAllUser() {
    return this.users.send('getAll-users', {})
  }

  getOneUser(id: number) {
    return this.users.send('getOne-user', {id})
  }

  updateUser(id: number, data: UpdateUserDto) {
    return this.users.send('update-user', {id, data})
  }

  deleteUser(id: number) {
    return this.users.send('delete-user', {id})
  }

  createProduct(data: CreateProductDto) {
    return this.products.send('create-product', {data})
  }

  getAllProducts() {
    return this.products.send('getAll-products', {})
  }

  getoneProduct(id: number) {
    return this.products.send('getOne-product', {id})
  }

  updateProduct(id: number, data: UpdateProductDto) {
    return this.products.send('update-product', {id, data})
  }

  deleteProduct(id: number) {
    return this.products.send('delete-product', {id})
  }
}
