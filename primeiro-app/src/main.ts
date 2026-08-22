import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

/**
 *  app.module.ts : Módulo proncipal do aplicativo
 *  app.controller.ts : Define as rotas e lida com as requisições
 * app.service.ts: contém a lógica de negócio, separado do controlador.
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
