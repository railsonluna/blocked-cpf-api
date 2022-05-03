import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db' || process.env.DB_HOST,
  port: 5432 || parseInt(process.env.DB_PORT),
  username: 'postgres' || process.env.DB_USER,
  password: 'postgres' || process.env.DB_PASS,
  database: 'cpfs' || process.env.DB_BASE,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
