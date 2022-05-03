import { Cpf } from '../domain/cpf';
import { CpfRepository } from '../domain/ports/cpf.repository';
import { CpfEntity } from '../adapters/repository/typeorm/entity/cpf.entity';
import { ExistsCpfException } from '../domain/exceptions/exists-cpf-exception';

export class CreateCpfService {
  constructor(private readonly repository: CpfRepository) {}

  async create(cpfDTO: Cpf): Promise<void> {
    const cpfEntity = new CpfEntity(cpfDTO.cpf);
    await this._validateDuplicateCpf(cpfEntity);

    await this.repository.save(cpfEntity);
  }

  private async _validateDuplicateCpf(cpfEntity: CpfEntity): Promise<void> {
    const cpf = await this.repository.findByCpf(cpfEntity.cpf);

    if (cpf) {
      throw new ExistsCpfException();
    }
  }
}
