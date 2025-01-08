import React, { useState } from 'react';
import   './styles.css';
import Stage from './Stage'; 
import Car from './Car';  
import Son from './Son';
import Chrono from './Chrono';
import Pays from './Pays';
import Jdwl from './Jdwl';   
import Add from './Add'; 
import Valid from './Valid'; 
import Formu from './Formu'; 
import Tabla from './Tabla'; // Si tu as un composant Detail séparé
export default function App() { 
    const [articles] = useState([
    { id: 1, name: "IPHONE", price: 100 },
    { id: 2, name: "LG", price: 200 },
    { id: 3, name: "SAMSUNG ", price: 150 }
  ]);

  // État du panier
  const [cart, setCart] = useState([]);

  // Fonction pour ajouter un article au panier
  // const addToCart = (article) => {
  //   setCart([...cart, article]);
  // }; 
      const [data,setData] = useState([ 
    { nom: 'malaq', ville: 'Kech',salaire: '10' , photo: 'https://randomuser.me/api/portraits/women/3.jpg'}
    , {nom: 'her', ville: 'azli', salaire:200,photo: 'https://randomuser.me/api/portraits/women/72.jpg'},
     { nom: 'biba', ville: 'fes',salaire:400, photo: 'https://randomuser.me/api/portraits/women/82.jpg'} 
  ]); 
        const [data1,setData1] = useState([ 
    { nom: 'malaq', ville: 'Kech',salaire: 988 , photo: 'https://randomuser.me/api/portraits/women/3.jpg'}
    , {nom: 'oopoo', ville: 'azli', salaire:200,photo: 'https://randomuser.me/api/portraits/women/72.jpg'},
     { nom: 'MARIYA', ville: 'fes',salaire:400, photo: 'https://randomuser.me/api/portraits/women/82.jpg'} 
  ]); 
const [input, setInput] = useState("");
const [result, setResult] = useState(null); 

    
    const add = (nouveauUtilisateur) => {
    setData([...data, nouveauUtilisateur]); // Ajouter l'utilisateur à la fin de la liste
  }
const chercherUtilisateur = (nom) => {
    const result = data.find((user) => user.nom.toLowerCase() === nom.toLowerCase());
    return result ;  
  };  
     
   const deleteUser = (nom) => {
    const a = data1.filter((record) => record.nom !== nom);
    setData1(a);
  };
  return (
     
   <div>
       
       <Valid/>
       
       <Formu/>
       

<Chrono/>
         <div>
         <Pays/>
      <h1>My Boutique</h1>
      <h2>Articles disponibles</h2>
      <ul>
        {articles.map((x) => (
          <li key={x.id}>
            {x.name} - ${x.price}
            <button onClick={() =>  setCart([...cart, x])}>Ajouter au panier</button>
          </li> 
        ))} 
      </ul>

      <h2>Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <ul>
          {cart.map((Z, index) => (
            <li key={index}>
              {Z.name} - ${Z.price}
            </li> 
          ))}
        </ul>
      )}
    </div>
       <hr></hr>
       <Son/>
       <hr></hr>
            <h1>Liste des Utilisateurs</h1>
            <button  >Ajouter un utilisateur</button>
            <button  >Filtrer par ville (Rabat)</button>
            <button  >Effacer le filtre</button>
             <ul> 
      {data1.map((user,key) => (
        <li key={key}> 
          {user.nom} {user.ville}
          <button onClick={() => deleteUser(user.nom)}>Supprimer</button>
        </li>
      ))}
    </ul>
        
       <h2>ON EST DANS APP</h2> 
       <div className="ok">
      {data.map((item, key) => (
        <Stage  key={key}  nom={item.nom}  foto={item.photo} className="tabla-flex"/>         
      ))}
           </div>
         <hr></hr>
         
        <Tabla  users={data} className="tabla-flex"  /> 
       
       <hr></hr> 
       <Jdwl chercherUtilisateur={chercherUtilisateur}/> 
        <Add add={add}/> 
       <hr></hr> 
       <Car/>
    </div>
  );
}
