import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FavMeals } from './components/Livretter'
function App() {
  const favMeals = [
    { food: "Pasta" },
    { food: "Omelet" },
    { food: "Burger" },
    { food: "Pizza" },
    { food: "Is"}

  ]

  return (
    <>
      {favMeals.map((item, index) => {
        return <FavMeals dish={item.food} />

      })}
    </>
  )
}

export default App
