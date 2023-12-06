import React from "react";
import "./ProdutosFeirinha.css";
import { NavLink } from "react-router-dom";

const ProdutosFeirinha = (props) => {
  return (
    <>
      <div className="box-produtos">
        <img src={props.img} alt="Produto" />
        <div className="nome-preco-feirinha">
          <span>{props.produto}</span>
          <span>{props.preco}</span>
        </div>

        <div className="perfil-nome">
        <img src={props.perfil} alt="Perfil" />
        <NavLink to="/perfil"> <p>{props.nome}</p>
          </NavLink>
        </div>

        <NavLink to="/compra">Comprar</NavLink>
      </div>
    </>
  );
};

export default ProdutosFeirinha;
