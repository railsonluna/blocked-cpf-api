import { DomainException } from './domain-exception';

export class InvalidCpfException extends DomainException {
  constructor() {
    super('CPF is not valid.', 'InvalidCpfException');
  }
}
