import React, { useState } from 'react';

export default function Stage({ foto, nom }) {
  const [like, setLike] = useState(0); // Gérer le compteur spécifique au composant

  const Q = () => {
    setLike(like + 1); // Incrémenter le compteur
  };

  return (
    <div className="container tabla-flex">
      <hr />
      <h2>{nom}</h2>
      <img src={foto} alt={nom} />
      <div>
        <button onClick={Q}>LIKE {like}</button>
      </div>
    </div>
  );
}
