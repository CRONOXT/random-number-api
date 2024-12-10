import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Random Numbers API')
    .setDescription('API para generar números aleatorios')
    .setVersion('1.0')
    .addTag('random-numbers')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Obtener el puerto de las variables de entorno o usar 3000 como fallback
  const port = process.env.PORT || 3000;

  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
bootstrap();
