// src/pages/Error.js
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Erro</h1>
      <p>Página não encontrada</p>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
};

export default Error;
