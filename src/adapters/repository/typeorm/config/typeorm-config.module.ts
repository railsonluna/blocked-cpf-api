import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CpfEntity } from '../entity/cpf.entity';
import CpfRepositoryTypeORM from '../cpf.repository.typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db' || process.env.DB_HOST,
      port: 5432 || parseInt(process.env.DB_PORT),
      username: 'postgres' || process.env.DB_USER,
      password: 'postgres' || process.env.DB_PASS,
      database: 'cpfs' || process.env.DB_BASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([CpfEntity]),
  ],
  providers: [CpfRepositoryTypeORM],
  exports: [CpfRepositoryTypeORM],
})
export class TypeOrmConfigModule {}
