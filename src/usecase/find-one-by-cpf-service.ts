import { Cpf } from '../domain/cpf';
import { CpfRepository } from '../domain/ports/cpf.repository';
import { NotFoundCpfException } from '../domain/exceptions/not-found-cpf-exception';

export class FindOneByCpfService {
  constructor(private readonly repository: CpfRepository) {}

  async findByCpf(cpf: string): Promise<Cpf> {
    const cpfEntity = await this.repository.findByCpf(cpf);
    console.log(!cpfEntity);
    if (!cpfEntity) {
      throw new NotFoundCpfException();
    }
    return cpfEntity;
  }
}
