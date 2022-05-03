import { Cpf } from '../domain/cpf';
import { CpfRepository } from '../domain/ports/cpf.repository';

export class FindAllCpfService {
  constructor(private readonly repository: CpfRepository) {}

  async findAll(): Promise<Cpf[]> {
    return this.repository.findAll();
  }
}
