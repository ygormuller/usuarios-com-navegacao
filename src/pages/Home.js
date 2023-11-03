import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const users = [
    { id: 1, name: "Usuário 1", description: "Descrição do Usuário 1", image: "/assets/user1.jpeg", },
    { id: 2, name: "Usuário 2", description: "Descrição do Usuário 2", image: "/assets/user2.jpeg", },
    { id: 3, name: "Usuário 3", description: "Descrição do Usuário 3", image: "/assets/user3.jpeg", },
  ];

  return (
    <div>
      <h1>Home</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.description}</p>
          <img src={user.image} alt={user.name} />
          <Link to={`/details/${user.id}`}>Ver detalhes</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
