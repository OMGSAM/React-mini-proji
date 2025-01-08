import React, { useState } from 'react';
export  default function Formu  () {  
  const [theme, setTheme] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [coutJournalier, setCoutJournalier] = useState(0);
  const [expert, setExpert] = useState('');
  const [messageRecap, setMessageRecap] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des dates
    const dateDebutObj = new Date(dateDebut);
    const dateFinObj = new Date(dateFin);

    if (dateDebutObj > dateFinObj) {
      alert('La date de début ne peut pas être postérieure à la date de fin.');
      return;
    }

    // Calcul de la durée de l'événement
    const differenceEnMillisecondes = dateFinObj - dateDebutObj;
    const differenceEnJours = differenceEnMillisecondes / (1000 * 3600 * 24) + 1;

    // Calcul du coût total
    const coutTotal = parseFloat(coutJournalier) * differenceEnJours;

    // Formatage du message de récapitulation
    setMessageRecap(
      `L'expert : ${expert} assurera le thème : ${theme}, avec un coût journalier : ${coutJournalier} DH, pour une durée de : ${differenceEnJours} jours, soit un coût total de : ${coutTotal} DH.`
    );
  };

  return (
    <div>
      <h3>Formulaire de l'événement</h3>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Thème :</td>
              <td>
                <input
                  type="text"
                  size={40}
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Date de début :</td>
              <td>
                <input
                  type="date"
                  value={dateDebut}
                  onChange={(e) => setDateDebut(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Date de fin :</td>
              <td>
                <input
                  type="date"
                  value={dateFin}
                  onChange={(e) => setDateFin(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Coût :</td>
              <td>
                <input
                  type="number"
                  value={coutJournalier}
                  onChange={(e) => setCoutJournalier(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Expert :</td>
              <td>
                <input
                  type="text"
                  value={expert}
                  onChange={(e) => setExpert(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Confirmer</button>
      </form>
      {messageRecap && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h4>Résumé :</h4>
          <p>{messageRecap}</p>
        </div>
      )}
    </div>
  );
};
 
