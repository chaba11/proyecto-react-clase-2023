import React from 'react';

function Componente({ condicion }) {
  return (
    <div>
      {condicion || <p>Contenido del componente</p>}
    </div>
  );
}

export { Componente };

