import React, { useState } from 'react';
import GeneratedBranchName from './GeneratedBranchName';

const BranchNameGenerator = () => {
  const [ticketNumber, setTicketNumber] = useState('');
  const [title, setTitle] = useState('');
  const [generatedNames, setGeneratedNames] = useState([]);


  const handleGenerate = async () => {
    const url = new URL(import.meta.env.BACKEND_HOST + '/branches');
    url.searchParams.append('ticket', ticketNumber);
    url.searchParams.append('description', title);

    try {
        const response = await fetch(url, {
            method: 'GET'
          });
        console.log(response.data);
      
          if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setGeneratedNames(data); // Asigna las ramas generadas
        
    } catch (error) {
      console.log(error.message);
      throw error;
    }

  };

  return (
    <div className="branch-name-generator">
      <h2>Branch Name Generator</h2>

      <label>Número de Ticket:</label>
      <input
        type="text"
        value={ticketNumber}
        onChange={(e) => setTicketNumber(e.target.value)}
        placeholder="Ingresar número de ticket"
      />

      <label>Título:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ingresar título del ticket"
      />
      <button onClick={handleGenerate}>Generar</button>

      {/* Mostrar las ramas generadas */}
      <div className="generated-branches">
        {generatedNames.length > 0 &&
          generatedNames.map((option) => (
            <GeneratedBranchName option={option} />
          ))}
      </div>
    </div>
  );
};

export default BranchNameGenerator;
