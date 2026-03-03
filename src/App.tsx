import { useState, useEffect } from "react"
import HorseList from "./Components/HorseList"
import horsesData from "./data/horses.json"
import {type Horse } from "./types/Horse"
import "./Style/App.css"
import { Menu, MenuItem, MenuLabel, MenuSeparator } from "@pegaseoff/pegase-ds"

const App = () => {
  const [horses, setHorses] = useState<Horse[]>([])
  const [active, setActive] = useState('home');
  useEffect(() => {
    setHorses(horsesData as Horse[])
  }, [])

  return (
    <div className="container">
      <Menu activeKey={active} onChange={setActive}>
        <MenuItem value="home">Accueil</MenuItem>
        <MenuItem value="products">Produits</MenuItem>
        <MenuSeparator />
        <MenuItem value="contact">Contact</MenuItem>
        {/* <MenuLabel>Autres</MenuLabel> */}
        <MenuItem value="settings">Paramètres</MenuItem>
      </Menu>
      <h1>🐎 Nos Chevaux</h1>
      <HorseList horses={horses} />
    </div>
  )
}

export default App