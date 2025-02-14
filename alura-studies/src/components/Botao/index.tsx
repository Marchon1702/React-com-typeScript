import React from "react";
import style from "./botao.module.scss";

export default class Botao extends React.Component<{
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void
}> {
  render() {
    const {type = 'button', onClick} = this.props
    return <button onClick={onClick} type={type} className={style.botao}>{this.props.texto}</button>;
  }
}
