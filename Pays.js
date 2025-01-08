import React, { useEffect, useState } from 'react';

const Pays = () => {
  // État pour stocker les données de l'API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effectuer une requête API au chargement du composant
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
       .then(response=>response.json())
      .then(data => {
        setData(data);  // Stocker les données récupérées
        setLoading(false);  // Indiquer que le chargement est terminé
      })
      .catch(() => {
        setLoading(false);  // Si erreur, terminer le chargement
      });
  }, []);  // [] assure que l'API est appelée une seule fois au montage du composant

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  return (
    <div>
      <h1>My Moviz</h1>
      {data.length === 0 ? (
  <h1>WALO</h1>
) : ( 
  <ul>
    {data.map((item, index) => (
      <div key={index}> 
      <h2>{item.Title}</h2>
      <img src={item.Poster} alt="Poster "/>
          <hr></hr>
      </div>
    ))}
  </ul>
)}

        <hr></hr>
    </div>
      
  );
};

export default Pays;
