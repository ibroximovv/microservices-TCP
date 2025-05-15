import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from 'apps/homework/src/dto/create-product.dto';
import { UpdateProductDto } from 'apps/homework/src/dto/update-product.dto';
import { PrismaService } from 'apps/homework/src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService){}
  async createProduct(data: CreateProductDto) {
    try {
      return await this.prisma.products.create({ data: data })
    } catch (error) {
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }

  async getAllProduct() {
    try {
      return await this.prisma.products.findMany()
    } catch (error) {
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }

  async getOneProduct(id: number) {
    try {
      const findone = await this.prisma.products.findFirst({ where: { id }})
      if (!findone) throw new BadRequestException('Product not found')
      return findone
    } catch (error) {
      if (error instanceof BadRequestException) throw error
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    try {
      const findone = await this.prisma.products.findFirst({ where: { id }})
      if (!findone) throw new BadRequestException('Product not found')
      return await this.prisma.products.update({ where: { id }, data: updateProductDto })
    } catch (error) {
      if (error instanceof BadRequestException) throw error
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }

  async deleteProduct(id: number) {
    try {
      const findone = await this.prisma.products.findFirst({ where: { id }})
      if (!findone) throw new BadRequestException('Product not found')
      return await this.prisma.products.delete({ where: { id }})
    } catch (error) {
      if (error instanceof BadRequestException) throw error
      throw new InternalServerErrorException(error.message || 'Internal server error')
    }
  }
  
}
