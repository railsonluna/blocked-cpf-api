import { DomainException } from './domain-exception';
import { HttpStatus } from '@nestjs/common';

export class NotFoundCpfException extends DomainException {
  constructor() {
    super('CPF not found.', 'NotFoundCpfException', HttpStatus.NOT_FOUND);
  }
}
