import { gql } from "@apollo/client";

export const OBTER_CARRINHO = gql`
  query ObterCarrinho {
    carrinho {
      total
      itens {
        quantidade
        opcaoCompra { 
          id
          preco
        }
        livro {
          id
          titulo
          descricao
          imagemCapa
          autor {
            nome
          }
        }
      }
    }
  }
`

export const ADICIONAR_ITEM = gql`
mutation AdicionarItem($item: ItemCarrinhoInput!) {
  adicionarItem(item: $item)
}
`