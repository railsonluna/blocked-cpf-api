import { DomainException } from './domain-exception';

export class ExistsCpfException extends DomainException {
  constructor() {
    super('CPF already exists.', 'ExistsCpfException');
  }
}
