import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from 'apps/homework/src/dto/create-user.dto';
import { UpdateUserDto } from 'apps/homework/src/dto/update-user.dto';
import { PrismaService } from 'apps/homework/src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService){}
  async createUser(data: CreateUserDto) {
    try {
      return await this.prisma.users.create({ data: data })
    } catch (error) {
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }

  async getAllUser() {
    try {
      return await this.prisma.users.findMany()
    } catch (error) {
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }

  async getOneUser(id: number) {
    try {
      const findone = await this.prisma.users.findFirst({ where: { id }})
      if (!findone) throw new BadRequestException('User not found')
      return findone
    } catch (error) {
      if (error instanceof BadRequestException) throw error
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    try {
      const findone = await this.prisma.users.findFirst({ where: { id }})
      if (!findone) throw new BadRequestException('User not found')
      return await this.prisma.users.update({ where: { id }, data: updateUserDto })
    } catch (error) {
      if (error instanceof BadRequestException) throw error
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }

  async deleteUser(id: number) {
    try {
      const findone = await this.prisma.users.findFirst({ where: { id }})
      if (!findone) throw new BadRequestException('User not found')
      return await this.prisma.users.delete({ where: { id }})
    } catch (error) {
      if (error instanceof BadRequestException) throw error
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }
}
