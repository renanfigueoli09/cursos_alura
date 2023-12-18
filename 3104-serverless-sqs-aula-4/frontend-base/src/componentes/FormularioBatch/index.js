import { useState, useRef } from "react";
import Botao from "../Botao";
import CampoArquivo from "../CampoArquivo";
import { requestPresignURL, enviaArquivoViaURL } from "../../servicos/api-connect";
import "./FormularioBatch.css";

const FormularioBatch = (props) => {
  const [ arquivoSelecionado, setArquivoSelecionado ] = useState(null)
  const [ resOperacaoBatch, setResOperacaoBatch ] = useState('')
  const ref = useRef(null);

  const submitHandler = async (evento) => {
    evento.preventDefault();
    const urlPreassinada = await requestPresignURL(ref.current.files[0].name);
    const res = await enviaArquivoViaURL(urlPreassinada, arquivoSelecionado)
    setResOperacaoBatch(res);
  };

  return (
    <section className="formulario">
      <form
        onSubmit={submitHandler}
      >
        <h2>Selecione um arquivo para fazer o cadastro em lote</h2>
        <CampoArquivo
          obrigatorio={true}
          ref={ref}
          label="Selecione apenas arquivos do tipo CSV"
          type="file"
          id="form-arquivo"
          accept=".csv"
          onChange={e => setArquivoSelecionado(e.target.files[0])}
          msgResultadoBatch={resOperacaoBatch}
        />
        <Botao id="form-botao">Criar registros em lote</Botao>
      </form>
    </section>
  );
};

export default FormularioBatch;
