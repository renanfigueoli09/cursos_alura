import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;
  const [erro, setErro] = useState(true);

  const aoDigitado = (evento) => {
    setErro(evento.target.value === "");
    props.aoAlterado(evento.target.value, evento.target.value === "");
  };

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        placeholder={placeholderModificada}
        id={props.id}
      />
      {}
      {props.mostraErro && erro ? (
        <p id={`${props.id}-erro`}>{props.mensagemErro}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CampoTexto;
