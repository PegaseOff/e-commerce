import { useState, useEffect } from "react"
import HorseList from "./Components/HorseList"
import horsesData from "./data/horses.json"
import {type Horse } from "./types/Horse"
import "./Style/App.css"
import { Menu, MenuItem, MenuLabel, MenuSeparator } from "@pegaseoff/pegase-ds"
import { Routes, Route, Link } from "react-router-dom"

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
        <MenuItem value="products" to="/products">Produits</MenuItem>
        <MenuSeparator />
        <MenuItem value="contact">Contact</MenuItem>
        {/* <MenuLabel>Autres</MenuLabel> */}
        <MenuItem value="settings">Paramètres</MenuItem>
      </Menu>
      <Routes>
        <Route path="/products" element={<HorseList horses={horses} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App