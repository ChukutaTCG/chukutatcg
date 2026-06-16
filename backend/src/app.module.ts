import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/logger.middleware';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ContactModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
