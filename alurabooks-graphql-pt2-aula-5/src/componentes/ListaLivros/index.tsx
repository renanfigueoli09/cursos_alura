import { useReactiveVar } from "@apollo/client"
import { AbCampoTexto } from "ds-alurabooks"
import { useEffect, useState } from "react"
import { useLivros } from "../../graphql/livros/hooks"
import { filtroLivrosVar, livrosVar } from "../../graphql/livros/state"
import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"

import './ListaLivros.css'

interface ListaLivrosProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {

    const [textoBusca, setTextoDaBusca] = useState('')

    useEffect(() => {
        filtroLivrosVar({
            ...filtroLivrosVar(),
            titulo: textoBusca.length >= 3 ? textoBusca : ''
        })
    }, [textoBusca])

    filtroLivrosVar({
        ...filtroLivrosVar(),
        categoria,
    })
    
    const livros = useReactiveVar(livrosVar);

    useLivros()

    return <section>
        <form style={{ maxWidth: '80%', margin: '0 auto', textAlign: 'center' }}>
            <AbCampoTexto value={textoBusca} onChange={setTextoDaBusca} placeholder='Digite o título'/>
        </form>
        <div className="livros">
            {livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
        </div>
    </section>
}

export default ListaLivros