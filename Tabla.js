import React from "react";
export default function Tabla({users}) 
{
const a = users.reduce((v,user) =>  v+Number(user.salaire), 0);


  return (
    <div>
         
      <h3>Table Gris</h3>
        
      <table className="table table-bordered table-striped table-secondary">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Ville</th>
            <th>Salaire</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nom}</td>
              <td>{item.ville}</td>
              <td>{item.salaire} $</td>
              <td>
                <img
                  src={item.photo}
                  alt={`${item.nom}'s photo`}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          <h2> Le total des  salaires: {a} $</h2>
    </div>
  );
}
 
