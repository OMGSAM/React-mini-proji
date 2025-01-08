import React, { useState } from "react";
export default function Valid() {
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("");
  const [salaire, setSalaire] = useState("");
 const [photo, setPhoto] = useState("");
const[errors,seterrors]=useState([]);
const[succes,setsucces]=useState("");
      
const valide=(e)=> {  
     
    let isvalid=true;
    
    if (nom.trim()==="")  {
        isvalid=false; 
    seterrors(prevstate=>{return [prevstate,"SMIA KHAWYA"]}); 
    } 
      if (ville.trim()==="")  {
        isvalid=false; 
    seterrors(prevstate=>{return [prevstate,"LVILA ASAT"]}); 
    }
    
    if (salaire.trim()==="")  {
        isvalid=false; 
    seterrors(prevstate=>{return [prevstate,"  SALARY ASAT"]}); 
    }
 
    
    return isvalid; 
} 
  const handleSubmit = (e) => { 
      e.preventDefault(); 
       seterrors([]);
       setsucces("");    
    if (valide())
      { setsucces("RAK NADY A SAT") ; alert("VALIDE")} 
      
    }
    
 
      
    return ( 
        <div> 
<h1>FORMULAIRE DE MOI OK </h1>
        
      <div className="alert alert-danger" role="alert">
      <strong>{succes}</strong> 
      </div>  
      

        
        {errors.length>0 ?
      <div className="alert alert-danger">
      <strong>LES ERORS ABN 3MI </strong>
          <ul>{errors.map((x,key)=> <li key={key}>{x} </li>)}
          </ul> 
      </div> : ""
      } 

     <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>   
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />  
        <input 
          type="text"
          placeholder="Ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
                    />  
        <input
          type="number"
          placeholder="Salaire"
          value={salaire}
          onChange={(e) => setSalaire(e.target.value)}
        /> 
      </div>
 
         
      <button type="submit" className="btn btn-success">ENVOYER</button>
     <hr></hr>  
        </form>
       
        </div>
        
        )};
            
