import React, { useState } from "react";
export default function Car() {
      const [prix, setprix] = useState("");
  const [date1, setdate] = useState("");
     const [marque, setmarque] = useState("");
const [type, settype] = useState("");
  const [result, setResult] = useState(false);
   const diff =(Date.now() - new Date(date1))/(24*1000*3600);
    const dif=Math.floor(diff);
  const go = () => {
    //  e.preventDefault();
    setResult(true);
  };
     const calculPrixAvecTaxe = (prix) => { 
    return parseFloat(prix)+parseFloat(prix*20/100)  ; // Ajouter la taxe
  }; 
    

  return (
    <div>
          <h3>RECAPILATIF</h3>
       <select value={type}
        onChange={(e) => settype(e.target.value)}>
           <option value="dacia">DACIA</option>
             <option value="audi">AUDI</option>
             <option value="bmw">BWM</option>
       </select>
        <br></br>
         <input
        type="date"
        placeholder="LA DATE"
        value={date1}
        onChange={(e) => setdate(e.target.value)}
      /> <br></br>
         <input
        type="text"
        placeholder="MARQUE"
        value={marque}
        onChange={(e) => setmarque(e.target.value)}
      />
        <br></br>
         <input
        type="number"
        placeholder="PRIX"
        value={prix}
        onChange={(e) => setprix(e.target.value)}
      />
        <br></br>
      <button onClick={go}>SAVE IT</button>

      {result ? (
        // Si un utilisateur est trouvé
     <> 
         <h2>Prix AVEC TTC : {(calculPrixAvecTaxe(prix))} DH</h2>

  <h2>type : {type}</h2>
         <h2>price :{prix} DH</h2>
  <h2>date : {date1}</h2>
  <h2>marka :{marque}</h2>
         <h2>diff en jrs  est :{dif} Jours</h2>
         
    
</> 

             
      ) : (
        // Si aucun utilisateur n'est trouvé (après une recherche)
      <h1>MAKAYN WALO  </h1> 
      )}
    </div> 
     
  );
}
