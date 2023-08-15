import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TablaProductos } from './components/TablaProductos'

const PRODUCTOS = [
  {categoria: "Cafetería", precio: "$90", stock: 10, nombre: "Espresso"},
  {categoria: "Cafetería", precio: "$120", stock: 15, nombre: "Cortado"},
  {categoria: "Cafetería", precio: "$160", stock: 0, nombre: "Capucchino"},
  {categoria: "Panadería", precio: "$190", stock: 5, nombre: "Pan de Nuez"},
  {categoria: "Panadería", precio: "$160", stock: 1, nombre: "Pan de Campo"},
  {categoria: "Dulces", precio: "$180", stock: 0, nombre: "Carrot Cake"},
  {categoria: "Dulces", precio: "$60", stock: 50, nombre: "Cookie"},
  {categoria: "Dulces", precio: "$120", stock: 50, nombre: "Chocotorta"}
];


function App() {

  return (
    <>
      <TablaProductos productos={PRODUCTOS} />
    </>
  )
}

export default App
