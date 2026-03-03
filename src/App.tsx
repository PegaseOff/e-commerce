import { useState } from "react"
import HorseList from "./Components/HorseList"
import "./Style/App.css"
import { Menu, MenuItem, MenuSeparator } from "@pegaseoff/pegase-ds"
import { Routes, Route, Link } from "react-router-dom";
import Vitrine from "./Components/Vitrine";

const App = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="container">
      <Menu activeKey={active} onChange={setActive}>
        <Link to="/">
          <MenuItem value="home">Accueil</MenuItem>
        </Link>
        <Link to="/products">
          <MenuItem value="products">Produits</MenuItem>
        </Link>
        <MenuSeparator />
        <Link to="/about">
          <MenuItem value="about">À propos</MenuItem>
        </Link>
        <Link to="/settings">
          <MenuItem value="settings">Paramètres</MenuItem>
        </Link>
      </Menu>

      <Routes>
        <Route path="/" element={<Vitrine />} />
        <Route path="/products" element={<HorseList />} />
        <Route path="/about" element={<h1>À propos</h1>} />
        <Route path="/settings" element={<h1>Paramètres</h1>} />
      </Routes>
    </div>
  )
}

export default App