import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigServiceModule } from './config/config-service.module';
import { CpfController } from './cpf/cpf.controller';
import { ValidateCpfMiddleware } from './validate-cpf-middleware';

@Module({
  imports: [ConfigServiceModule.register()],
  controllers: [CpfController],
})
export class ControllerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCpfMiddleware)
      .forRoutes('cpf/:cpf')
      .apply(ValidateCpfMiddleware)
      .forRoutes({ path: 'cpf', method: RequestMethod.POST });
  }
}
