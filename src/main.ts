import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function initMain() {
  const app = await NestFactory.create(AppModule);

  //! -> Configurar el manejo de excepciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //* -> Elimina propiedades no permitidas en el DTO
      forbidNonWhitelisted: true, //* -> Lanza un error si se envían propiedades no permitidas
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}
initMain();
