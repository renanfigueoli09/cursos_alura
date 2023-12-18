import "./Botao.css";

const Botao = (props) => {
  return (
    <button className='botao' {...props}>
      {props.children}
    </button>
  );
};

export default Botao;
