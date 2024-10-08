import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { pt } from "yup-locale-pt";
import AbrigoEntity from "../../entities/AbrigoEntity";
import { TipoRequestBodyAbrigo } from "../../tipos/tiposAbrigo";
import tratarErroValidacaoYup from "../../utils/trataValidacaoYup";

yup.setLocale(pt);
const esquemaBodyAbrigo: yup.ObjectSchema<
  Omit<TipoRequestBodyAbrigo, "endereco">
> = yup.object({
  nome: yup.string().defined().required(),
  celular: yup
    .string()
    .defined()
    .matches(
      /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm,
      "celular inválido"
    )
    .required(),
  email: yup.string().email().defined().required(),
  senha: yup
    .string()
    .defined()
    .required()
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
      "senha inválida"
    ),
});

export const middlewareValidadorBodyAbrigo = async (
  req: Request<{}, {}, Partial<AbrigoEntity>>,
  res: Response,
  next: NextFunction
) => {
  tratarErroValidacaoYup(esquemaBodyAbrigo, req, res, next);
};
