import { forwardRef } from "react";
import "./CampoArquivo.css";

const CampoArquivo = forwardRef(function CampoArquivo(props, ref) {
  return (
      <div className='campo-texto'>
      <label>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        accept={props.accept}
        onChange={props.onChange}
        id={props.id}
      />
      <span>{props.msgResultadoBatch}</span>
    </div>
  );
});

export default CampoArquivo;
