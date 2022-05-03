import { HttpException, HttpStatus } from '@nestjs/common';

export class DomainException extends HttpException {
  type: string;

  constructor(
    message: string,
    type: string,
    status: number = HttpStatus.BAD_REQUEST,
  ) {
    super(message, status);
    this.type = type;
  }
}
