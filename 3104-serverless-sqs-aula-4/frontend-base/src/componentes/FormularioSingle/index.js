import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import "./FormularioSingle.css";

const defaultState = { value: "", error: true };

const FormularioSingle = (props) => {
  const [nome, setNome] = useState(defaultState);
  const [email, setEmail] = useState(defaultState);
  const [mostraErro, setMostraErro] = useState(false);

  const aoSalvar = (evento) => {
    evento.preventDefault();
    setMostraErro(true);
    if (formValido()) {
      props.aoAlunoCadastrado({
        nome: nome.value,
        email: email.value,
      });
      setNome(defaultState);
      setEmail(defaultState);
      setMostraErro(false);
    }
  };

  const formValido = () => {
    console.log(nome.error, email.error);
    return !nome.error && !email.error;
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para cadastrar estudante</h2>
        <CampoTexto
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome'
          valor={nome.value}
          aoAlterado={(valor, erro) => setNome({ value: valor, error: erro })}
          id='form-nome'
          mostraErro={mostraErro}
          mensagemErro='O campo nome deve ser preenchido'
        />
        <CampoTexto
          obrigatorio={true}
          label='email'
          placeholder='Digite o email'
          valor={email.value}
          aoAlterado={(valor, erro) => setEmail({ value: valor, error: erro })}
          id='form-email'
          mostraErro={mostraErro}
          mensagemErro='O campo e-mail deve ser preenchido'
        />
        <Botao id='form-botao'>Criar registro de estudante</Botao>
      </form>
    </section>
  );
};

export default FormularioSingle;
