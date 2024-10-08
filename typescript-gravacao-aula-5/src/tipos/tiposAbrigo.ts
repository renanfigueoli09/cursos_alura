import AbrigoEntity from "../entities/AbrigoEntity";

type TipoRequestBodyAbrigo = Omit<AbrigoEntity, "id" | "pets">;

type TipoResponseBodyAbrigo = {
  dados?:
    | Pick<AbrigoEntity, "id" | "nome" | "email" | "celular" | "endereco">
    | Pick<AbrigoEntity, "id" | "nome" | "email" | "celular" | "endereco">[];
};

type TipoRequestParamsAbrigo = {
  id?: string;
};

export {
  TipoRequestBodyAbrigo,
  TipoRequestParamsAbrigo,
  TipoResponseBodyAbrigo,
};
