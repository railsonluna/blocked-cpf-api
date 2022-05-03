import { Cpf } from '../cpf';
import { CpfEntity } from '../../adapters/repository/typeorm/entity/cpf.entity';

export interface CpfRepository {
  save(cpf: CpfEntity): Promise<Cpf>;

  findAll(): Promise<Cpf[]>;

  findByCpf(cpf: string): Promise<Cpf>;

  delete(cpf: string): Promise<void>;
}
