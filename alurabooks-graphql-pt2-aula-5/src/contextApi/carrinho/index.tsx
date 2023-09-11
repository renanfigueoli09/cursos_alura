import { createContext, ReactElement, useContext } from "react";
import { useCarrinho, useAdicionarItem } from "../../graphql/carrinho/hooks";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";


export interface ICarrinhoContext {
    carrinho?: ICarrinho
    adicionarItemCarrinho: (item: IItemCarrinho) => void
    removerItemCarrinho: (item: IItemCarrinho) => void
    carregando: boolean
}

export const CarrinhoContext = createContext<ICarrinhoContext>({
    adicionarItemCarrinho: () => null,
    removerItemCarrinho: () => null,
    carregando:  false
})

interface CarrinhoProviderProps {
    children: ReactElement
}

const CarrinhoProvider = ({ children } : CarrinhoProviderProps) => {
    
    const { data, loading: loadingCarrinho } = useCarrinho()

    const [adicionaItem, { loading: loadingAdiciona }] = useAdicionarItem()

    const adicionarItemCarrinho = (item: IItemCarrinho) => {
        adicionaItem({
            variables: {
                item: {
                    livroId: item.livro.id,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade
                }
            }
        })
    }

    const removerItemCarrinho = (item: IItemCarrinho) => {
        console.log('[CarrinhoProvider] - removerItemCarrinho', item)
    }

    return (
        
        <CarrinhoContext.Provider 
            value={{ 
                carrinho: data?.carrinho, 
                adicionarItemCarrinho,
                removerItemCarrinho,
                carregando: loadingCarrinho || loadingAdiciona
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    return useContext<ICarrinhoContext>(CarrinhoContext)
}

export default CarrinhoProvider