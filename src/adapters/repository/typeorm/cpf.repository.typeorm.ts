import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CpfEntity } from './entity/cpf.entity';
import { Cpf } from '../../../domain/cpf';
import { CpfRepository } from '../../../domain/ports/cpf.repository';

@Injectable()
export default class CpfRepositoryTypeORM implements CpfRepository {
  constructor(
    @InjectRepository(CpfEntity)
    private readonly cpfEntityRepository: Repository<CpfEntity>,
  ) {}

  async save(cpfEntity: CpfEntity): Promise<Cpf> {
    return this.cpfEntityRepository.save(cpfEntity);
  }

  async findAll(): Promise<Cpf[]> {
    return this.cpfEntityRepository.find();
  }

  async findByCpf(cpf: string): Promise<Cpf> {
    return this.cpfEntityRepository.findOneBy({
      cpf: cpf,
    });
  }

  async delete(cpf: string): Promise<void> {
    await this.cpfEntityRepository.delete(cpf);
  }
}
