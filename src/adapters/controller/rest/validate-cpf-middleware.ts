import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CpfEntity } from '../../repository/typeorm/entity/cpf.entity';
import { validate } from 'class-validator';
import { InvalidCpfException } from '../../../domain/exceptions/invalid-cpf-exceptions';

@Injectable()
export class ValidateCpfMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const cpf = this._getCpfFromRequest(req);
    await this._validateIsValidCpf(cpf);

    next();
  }

  private async _validateIsValidCpf(cpf: string): Promise<void> {
    const cpfEntity = new CpfEntity(cpf);
    const erros = await validate(cpfEntity);

    if (!!erros.length) {
      throw new InvalidCpfException();
    }
  }

  private _getCpfFromRequest(req: Request) {
    const cpfRoute = req.url.replace(/\D/g, '');
    const { cpf } = req.body;

    return cpfRoute || cpf;
  }
}
