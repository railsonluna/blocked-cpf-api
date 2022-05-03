import {
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn, PrimaryColumn,
} from 'typeorm';
import { Length, Validate } from 'class-validator';
import { ValidCpfValueRule } from './valid-cpf-validator';

@Entity('cpfs')
@Unique(['cpf'])
export class CpfEntity {
  @Column({ nullable: false, type: 'varchar', length: 11 })
  @Validate(ValidCpfValueRule)
  @Length(11, 11)
  @PrimaryColumn()
  cpf: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor(cpf: string) {
    this.cpf = cpf;
  }
}
