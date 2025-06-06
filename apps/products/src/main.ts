import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ProductsModule, {
    transport: Transport.TCP,
    options: {
      port: 3002
    }
  });
  await app.listen();
}
bootstrap();
