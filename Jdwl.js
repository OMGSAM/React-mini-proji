import React, { useState } from "react";
export default function Jdwl({ chercherUtilisateur }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
 const [res,setr]=useState(false);
  const handleSearch = () => {
    const foundUser = chercherUtilisateur(input); // Appel de la fonction reçue via props
    setResult(foundUser);
      setr(true);
  };
 
  return (
    <div>
      <h3>Recherche dans Stage</h3>
      <input
        type="text"
        placeholder="Nom de l'utilisateur"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Chercher</button>
{res && (
        <h1>  {result ?"trouvé" : "Non asat hh"} </h1>
      )}
    </div> 
     )
  ;
}
