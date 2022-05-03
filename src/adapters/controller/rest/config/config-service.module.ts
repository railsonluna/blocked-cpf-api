import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmConfigModule } from 'src/adapters/repository/typeorm/config/typeorm-config.module';
import CpfRepositoryTypeORM from 'src/adapters/repository/typeorm/cpf.repository.typeorm';
import { CreateCpfService } from 'src/usecase/create-cpf-service';
import { FindAllCpfService } from 'src/usecase/find-all-cpf-service';
import { FindOneByCpfService } from '../../../../usecase/find-one-by-cpf-service';
import {DeleteCpfService} from "../../../../usecase/delete-cpf-service";

@Module({
  imports: [TypeOrmConfigModule],
})
export class ConfigServiceModule {
  static FIND_ALL_CPF_SERVICE = 'FindAllCpfService';
  static CREATE_CPF_SERVICE = 'CreateCpfService';
  static FIND_ONE_CPF_SERVICE = 'FindOneByCpfService';
  static DELETE_CPF_SERVICE = 'DeleteCpfService';

  static register(): DynamicModule {
    return {
      module: ConfigServiceModule,
      providers: [
        {
          inject: [CpfRepositoryTypeORM],
          provide: ConfigServiceModule.CREATE_CPF_SERVICE,
          useFactory: (cpfRepository: CpfRepositoryTypeORM) =>
            new CreateCpfService(cpfRepository),
        },
        {
          inject: [CpfRepositoryTypeORM],
          provide: ConfigServiceModule.FIND_ALL_CPF_SERVICE,
          useFactory: (cpfRepository: CpfRepositoryTypeORM) =>
            new FindAllCpfService(cpfRepository),
        },
        {
          inject: [CpfRepositoryTypeORM],
          provide: ConfigServiceModule.FIND_ONE_CPF_SERVICE,
          useFactory: (cpfRepository: CpfRepositoryTypeORM) =>
            new FindOneByCpfService(cpfRepository),
        },
        {
          inject: [CpfRepositoryTypeORM],
          provide: ConfigServiceModule.DELETE_CPF_SERVICE,
          useFactory: (cpfRepository: CpfRepositoryTypeORM) =>
            new DeleteCpfService(cpfRepository),
        },
      ],
      exports: [
        ConfigServiceModule.CREATE_CPF_SERVICE,
        ConfigServiceModule.FIND_ALL_CPF_SERVICE,
        ConfigServiceModule.FIND_ONE_CPF_SERVICE,
        ConfigServiceModule.DELETE_CPF_SERVICE,
      ],
    };
  }
}
