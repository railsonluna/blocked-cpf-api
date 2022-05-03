import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { cpf } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'UserExists', async: true })
@Injectable()
export class ValidCpfValueRule implements ValidatorConstraintInterface {
  async validate(value: string) {
    return cpf.isValid(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'CPF is not valid.';
  }
}
