import { AbBotao, AbGrupoOpcao, AbGrupoOpcoes, AbInputQuantidade, AbTag } from "ds-alurabooks"
import { useState } from "react"
import { useParams } from "react-router-dom"
import BlocoSobre from "../../componentes/BlocoSobre"
import Loader from "../../componentes/Loader"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { useLivro } from "../../graphql/livros/hooks"
import { formatador } from "../../utils/formatador-moeda"

import './Livro.css'

const Livro = () => {
    const params = useParams()

    const [opcao, setOpcao] = useState<AbGrupoOpcao>()

    const { data, loading, error } = useLivro(params.slug || '')

    if (error) {
        console.log('Alguma coisa deu errada')
        console.log(error)
        return <h1>Ops! Algum erro inesperado aconteceu</h1>
    }
    
    if (loading) {
        return <Loader />
    }

    const opcoes: AbGrupoOpcao[] = data?.livro.opcoesCompra ? data?.livro.opcoesCompra.map(opcao => ({
        id: opcao.id,
        corpo: formatador.format(opcao.preco),
        titulo: opcao.titulo,
        rodape: opcao.formatos ? opcao.formatos.join(',') : ''
    }))
        : []

    return (
        <section className="livro-detalhe">
            <TituloPrincipal texto="Detalhes do Livro" />
            <div className="">
                <div className="container">
                    <figure>
                        <img src={data?.livro.imagemCapa} alt={data?.livro.descricao} />
                    </figure>
                    <div className="detalhes">
                        <h2>{data?.livro.titulo}</h2>
                        <p>{data?.livro.descricao}</p>
                        <h3>Selecione o formato do seu livro:</h3>
                        <div className="opcoes">
                            <AbGrupoOpcoes
                                opcoes={opcoes}
                                onChange={setOpcao}
                                valorPadrao={opcao}
                            />
                        </div>
                        <p><strong>*Você terá acesso às futuras atualizações do livro.</strong></p>
                        <footer>
                            <div className="qtdContainer">
                                <AbInputQuantidade onChange={() => {}} value={0}/>
                            </div>
                            <div>
                                <AbBotao texto="Comprar" />
                            </div>
                        </footer>
                    </div>
                </div>
                <div>
                    <BlocoSobre titulo="Sobre o Autor" corpo={data?.livro.autor.sobre} />
                    <BlocoSobre titulo="Sobre o Livro" corpo={data?.livro.sobre} />
                </div>
                <div className="tags">
                    {data?.livro.tags?.map(tag => <AbTag contexto="secundario" key={tag.nome} texto={tag.nome}/>)}
                </div>
            </div>
        </section>
    )
}

export default Livro