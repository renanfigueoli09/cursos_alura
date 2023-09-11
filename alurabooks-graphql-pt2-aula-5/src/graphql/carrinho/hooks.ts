import { useMutation, useQuery } from "@apollo/client"
import { ICarrinho } from "../../interfaces/ICarrinho"
import { ADICIONAR_ITEM, OBTER_CARRINHO } from "./queries"

export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}

export const useAdicionarItem = () => {
    return useMutation(ADICIONAR_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    })
}