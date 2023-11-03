import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const user = {
    name: "Nome do Usuário",
    description: "Descrição do Usuário",
    image: "link_da_imagem",
  };

  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      <h2>{user.name}</h2>
      <p>{user.description}</p>
      <img src={user.image} alt={user.name} />
      <Link to="/">Voltar para Home</Link>
    </div>
  );
};

export default Details;
