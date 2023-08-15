import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Jugador } from './components/Jugador'


function App() {
  const jugadores = [
    // Lista de jugadores con la propiedad expulsado agregada.
  ];

  return (
    <div>
      {jugadores.map((jugador) => (
        <Jugador firstName={jugador.firstName} lastName={jugador.lastName} expulsado={jugador.expulsado} />
      ))}
    </div>
  );
}

export default App;