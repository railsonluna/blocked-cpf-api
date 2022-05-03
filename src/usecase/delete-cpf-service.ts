import { CpfRepository } from '../domain/ports/cpf.repository';

export class DeleteCpfService {
  constructor(private readonly repository: CpfRepository) {}

  async delete(cpf: string): Promise<void> {
    await this.repository.delete(cpf);
  }
}
