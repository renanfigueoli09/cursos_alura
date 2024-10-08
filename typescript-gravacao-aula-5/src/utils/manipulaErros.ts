import { EnumHttpStatusCode } from "../enum/EnumHttpStatusCode";

export class ManipulaErros extends Error {
  readonly statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class RequisicaoRuim extends ManipulaErros {
  constructor(message: string) {
    super(message, EnumHttpStatusCode.BAD_REQUEST);
  }
}

export class NaoEncontrado extends ManipulaErros {
  constructor(message: string) {
    super(message, EnumHttpStatusCode.NOT_FOUND);
  }
}
