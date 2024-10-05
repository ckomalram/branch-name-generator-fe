import React from 'react';

const GeneratedBranchName = (generatedOption) => {
    
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedOption.option.value);
    alert('¡Nombre de la rama copiado al portapapeles!');
  };

  return (
    <div>
    <div className="generated-branch">
    <b>{generatedOption.option.name}</b>
    </div>
    <div className="generated-branch">
      <p>{generatedOption.option.value}</p>
      <button onClick={handleCopy}>Copiar</button>
    </div>
    </div>
  );
};

export default GeneratedBranchName;
