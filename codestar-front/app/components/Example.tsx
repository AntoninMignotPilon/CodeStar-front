import React, { useState } from 'react';

type StudentProps = {
  name: string;
};

export const Student: React.FC<StudentProps> = ({ name }) => {
  // Le 'this.level = 0' de la classe devient un état (state)
  const [level, setLevel] = useState<number>(0);

  // La méthode levelUp devient une fonction interne
  const levelUp = () => {
    setLevel((prevLevel) => prevLevel + 1);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Étudiant : {name}</h3>
      <p>Niveau actuel : {level}</p>
      
      <button onClick={levelUp}>
        Prêt à passer au niveau supérieur ?
      </button>

      {/* Affichage conditionnel (similaire au return de votre méthode) */}
      {level > 0 && (
        <p style={{ marginTop: '10px' }}>
          🚀 {name} est niveau {level} !
        </p>
      )}
    </div>
  );
};