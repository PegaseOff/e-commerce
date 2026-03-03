import { useState } from "react"
import HorseList from "./Components/HorseList"
import "./Style/App.css"
import { Menu, MenuItem, MenuSeparator } from "@pegaseoff/pegase-ds"
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="container">
      <Menu activeKey={active} onChange={setActive}>
        <MenuItem value="home">Accueil</MenuItem>
        <Link to="/products" style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem value="products">Produits</MenuItem>
        </Link>
        <MenuSeparator />
        <MenuItem value="contact">Contact</MenuItem>
        <MenuItem value="settings">Paramètres</MenuItem>
      </Menu>
      <Routes>
        <Route path="/" element={<h1>Bienvenue sur notre site de vente de chevaux !</h1>} />
        <Route path="/products" element={<HorseList />} />
      </Routes>
    </div>
  )
}

export default App