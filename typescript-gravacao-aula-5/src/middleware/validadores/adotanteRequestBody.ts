import * as yup from "yup";
import { TipoRequestBodyAdotante } from "../../tipos/tiposAdotante";
import { NextFunction, Request, Response } from "express";
import { pt } from "yup-locale-pt";
import tratarErroValidacaoYup from "../../utils/trataValidacaoYup";

yup.setLocale(pt);

const esquemaBodyAdotante: yup.ObjectSchema<
  Omit<TipoRequestBodyAdotante, "endereco">
> = yup.object({
  nome: yup.string().defined().required(),
  celular: yup
    .string()
    .defined()
    .required()
    .matches(
      /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm,
      "celular inválido"
    ),
  senha: yup
    .string()
    .defined()
    .required()
    .min(6)
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
      "senha inválida"
    ),
  foto: yup.string().optional(),
});

const middlewareValidadorBodyAdotante = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  tratarErroValidacaoYup(esquemaBodyAdotante, req, res, next);
};

export { middlewareValidadorBodyAdotante };
