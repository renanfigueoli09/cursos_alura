import AdotanteEntity from "../../entities/AdotanteEntity";
import EnderecoEntity from "../../entities/Endereco";

export default interface InterfaceAdotanteRepository {
  criaAdotante(adotante: AdotanteEntity): void | Promise<void>;

  listaAdotantes(): AdotanteEntity[] | Promise<AdotanteEntity[]>;

  atualizaAdotante(id: number, adotante: AdotanteEntity): void;

  deletaAdotante(id: number): void;

  atualizaEnderecoAdotante(idAdotante: number, endereco: EnderecoEntity): void;
}
