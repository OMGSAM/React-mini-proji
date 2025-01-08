import React, { useState } from 'react';

function Son() {
  // Liste des options de sondage
  const options = [
    "Option 1: J'aime les pizzas",
    "Option 2: J'aime les sushis",
    "Option 3: J'aime les burgers",
    "Option 4: J'aime les tacos"
  ];

  // État pour la réponse sélectionnée
  const [selectedOption, setSelectedOption] = useState(null);

  // Fonction pour gérer la sélection d'une option
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Fonction pour gérer la soumission du sondage
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      alert(`Vous avez choisi: ${selectedOption}`);
    } else {
      alert('Veuillez choisir une option.');
    }
  };

  return (
    <div className="App">
      <h1>Sondage: Quel est votre plat préféré ?</h1>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="food"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Son;
