import { Module } from '@nestjs/common';
import { ControllerModule } from '../adapters/controller/rest/controller.module';

@Module({
  imports: [ControllerModule],
})
export class AppModule {}
