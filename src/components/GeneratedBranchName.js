import React from 'react';

const GeneratedBranchName = (props) => {
    
  const handleCopy = () => {
    navigator.clipboard.writeText(props.option.value);
    alert('¡Nombre de la rama copiado al portapapeles!');
  };

  return (
    <div>
    <div className="generated-branch">
    <b>{props.option.name}: </b>
    </div>
    <div className="generated-branch">
      <p>{props.option.value}</p>
      <button onClick={handleCopy}>Copiar</button>
    </div>
    </div>
  );
};

export default GeneratedBranchName;
