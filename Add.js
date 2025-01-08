import React, { useState } from "react";
export default function Add({ add }) {
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("");
  const [salaire, setSalaire] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    if (!nom || !ville || !salaire || !photo) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    // Appel de la fonction d'ajout avec les nouvelles données
    add({ nom, ville, salaire: Number(salaire), photo });
    // Réinitialisation du formulaire
    setNom("");
    setVille("");
    setSalaire("");
    setPhoto("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Ajouter un utilisateur</h3>
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
        <input
          type="text"
          placeholder="URL de la photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success">Ajouter</button>
    </form>
  );
}
