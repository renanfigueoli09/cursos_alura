import { ILivro } from "./ILivro"
import { IOpcaoCompra } from "./IOpcaoCompra"

export interface IItemCarrinho {
    livro: ILivro
    opcaoCompra: IOpcaoCompra
    quantidade: number
}