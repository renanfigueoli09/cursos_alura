import { Request, Response } from "express";
import AbrigoEntity from "../entities/AbrigoEntity";
import { EnumHttpStatusCode } from "../enum/EnumHttpStatusCode";
import AbrigoRepository from "../repositories/AbrigoRepository";
import {
  TipoRequestBodyAbrigo,
  TipoRequestParamsAbrigo,
  TipoResponseBodyAbrigo,
} from "../tipos/tiposAbrigo";
import EnderecoEntity from "../entities/Endereco";

export default class AbrigoController {
  constructor(private repository: AbrigoRepository) {}
  async criaAbrigo(
    req: Request<TipoRequestParamsAbrigo, {}, TipoRequestBodyAbrigo>,
    res: Response<TipoResponseBodyAbrigo>
  ) {
    const { nome, celular, email, senha, endereco } = req.body;
    const novoAbrigo = new AbrigoEntity(nome, celular, email, senha, endereco);

    const teste = await this.repository.criaAbrigo(novoAbrigo);
    console.log(teste);
    return res
      .status(201)
      .json({ dados: { id: novoAbrigo.id, nome, celular, email, endereco } });
  }

  async listaAbrigos(
    req: Request<TipoRequestParamsAbrigo, {}, TipoRequestBodyAbrigo>,
    res: Response<TipoResponseBodyAbrigo>
  ) {
    const listaDeAbrigos = await this.repository.listaAbrigos();
    const dados = listaDeAbrigos.map((abrigo) => {
      return {
        id: abrigo.id,
        nome: abrigo.nome,
        celular: abrigo.celular,
        email: abrigo.email,
        endereco: abrigo.endereco !== null ? abrigo.endereco : undefined,
      };
    });
    return res.status(EnumHttpStatusCode.OK).json({ dados });
  }

  async atualizaAbrigo(
    req: Request<TipoRequestParamsAbrigo, {}, TipoRequestBodyAbrigo>,
    res: Response<TipoResponseBodyAbrigo>
  ) {
    const { id } = req.params;
    await this.repository.atualizaAbrigo(Number(id), req.body as AbrigoEntity);

    return res.sendStatus(EnumHttpStatusCode.NO_CONTENT);
  }

  async deletaAbrigo(
    req: Request<TipoRequestParamsAbrigo, {}, TipoRequestBodyAbrigo>,
    res: Response<TipoResponseBodyAbrigo>
  ) {
    const { id } = req.params;

    await this.repository.deletaAbrigo(Number(id));

    return res.sendStatus(EnumHttpStatusCode.NO_CONTENT);
  }

  async atualizaEnderecoAbrigo(
    req: Request<TipoRequestParamsAbrigo, {}, EnderecoEntity>,
    res: Response<TipoResponseBodyAbrigo>
  ) {
    const { id } = req.params;
    await this.repository.atualizaEnderecoAbrigo(Number(id), req.body);
    return res.sendStatus(EnumHttpStatusCode.OK);
  }
}
