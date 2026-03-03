import { useState, useEffect } from "react"
import HorseList from "./Components/HorseList"
import horsesData from "./data/horses.json"
import {type Horse } from "./types/Horse"
import "./Style/App.css"

const App = () => {
  const [horses, setHorses] = useState<Horse[]>([])

  useEffect(() => {
    setHorses(horsesData as Horse[])
  }, [])

  return (
    <div className="container">
      <h1>🐎 Nos Chevaux</h1>
      <HorseList horses={horses} />
    </div>
  )
}

export default App