import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ConfigServiceModule } from '../config/config-service.module';
import { CreateCpfService } from '../../../../usecase/create-cpf-service';
import { FindAllCpfService } from '../../../../usecase/find-all-cpf-service';
import { Cpf } from '../../../../domain/cpf';
import { FindOneByCpfService } from '../../../../usecase/find-one-by-cpf-service';
import { HttpExceptionFilter } from '../../../../domain/exceptions/http-exception.filter';
import { DeleteCpfService } from '../../../../usecase/delete-cpf-service';

@Controller('cpf')
export class CpfController {
  constructor(
    @Inject(ConfigServiceModule.CREATE_CPF_SERVICE)
    private readonly createCpfService: CreateCpfService,
    @Inject(ConfigServiceModule.FIND_ALL_CPF_SERVICE)
    private readonly findAllCpfService: FindAllCpfService,
    @Inject(ConfigServiceModule.FIND_ONE_CPF_SERVICE)
    private readonly findOneByCpfService: FindOneByCpfService,
    @Inject(ConfigServiceModule.DELETE_CPF_SERVICE)
    private readonly deleteCpfService: DeleteCpfService,
  ) {}

  @Get()
  public async findAll(): Promise<Cpf[]> {
    return this.findAllCpfService.findAll();
  }

  @Get(':cpf')
  public async getByCpf(@Param('cpf') cpf): Promise<Cpf> {
    return this.findOneByCpfService.findByCpf(cpf);
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  public async create(@Body() cpf: Cpf) {
    return this.createCpfService.create(cpf);
  }

  @Delete(':cpf')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('cpf') cpf) {
    await this.deleteCpfService.delete(cpf);
  }
}
