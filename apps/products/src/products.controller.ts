import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateProductDto } from 'apps/homework/src/dto/create-product.dto';
import { UpdateProductDto } from 'apps/homework/src/dto/update-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  
  @MessagePattern('create-product')
  createProduct(@Payload() payload: { data: CreateProductDto }) {
    return this.productsService.createProduct(payload.data)
  }

  @MessagePattern('getAll-products')
  getAllProducts() {
    return this.productsService.getAllProduct()
  }

  @MessagePattern('getOne-product')
  getOneProduct(@Payload() payload: { id: number }) {
    return this.productsService.getOneProduct(payload.id)
  }

  @MessagePattern('update-product')
  updateProduct(@Payload() payload: { id: number; data: UpdateProductDto }) {
    return this.productsService.updateProduct(payload.id, payload.data )
  }

  @MessagePattern('delete-product')
  deleteProduct(@Payload() payload: { id: number }) {
    return this.productsService.deleteProduct(payload.id)
  }
}
