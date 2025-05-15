import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from 'apps/homework/src/dto/create-user.dto';
import { UpdateUserDto } from 'apps/homework/src/dto/update-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('create-user')
  createUser(@Payload() payload: { data: CreateUserDto }) {
    return this.usersService.createUser(payload.data)
  }

  @MessagePattern('getAll-users')
  getAllUsers() {
    return this.usersService.getAllUser()
  }

  @MessagePattern('getOne-user')
  getOneUser(@Payload() payload: { id: number }) {
    return this.usersService.getOneUser(payload.id)
  }

  @MessagePattern('update-user')
  updateUser(@Payload() payload: { id: number; data: UpdateUserDto }) {
    return this.usersService.updateUser(payload.id, payload.data )
  }

  @MessagePattern('delete-user')
  deleteUser(@Payload() payload: { id: number }) {
    return this.usersService.deleteUser(payload.id)
  }
}
