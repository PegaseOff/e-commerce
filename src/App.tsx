import HorseList from "./Components/HorseList"
import "./Style/App.css"
import { Icon, Menu, MenuItem, MenuLabel, MenuSeparator } from "@pegaseoff/pegase-ds"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Vitrine from "./Components/Vitrine";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FooterComponent } from "./Components/Footer";

const pathToKey: Record<string, string> = {
  '/': 'home',
  '/products': 'products',
  '/join_us': 'join_us',
  '/about': 'about',
  '/settings': 'settings',
};

const keyToPath: Record<string, string> = {
  home: '/',
  products: '/products',
  about: '/about',
  settings: '/settings',
};

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const active = pathToKey[pathname] ?? 'home';

  return (
    <div className="container">
      <Menu activeKey={active} onChange={(key: string) => navigate(keyToPath[key])}>
        <MenuItem value="home">Accueil</MenuItem>
        <MenuItem value="products">Produits</MenuItem>
        <MenuItem value="join_us" disabled>Nous Rejoindre</MenuItem>
        <MenuSeparator />
        <MenuLabel>
          Options
        </MenuLabel>
        <MenuItem value="about">
          <Icon variant="secondary" icon={IoPeopleSharp} />
        </MenuItem>
        <MenuItem value="settings">
          <Icon variant="secondary" icon={IoMdSettings} />
        </MenuItem>
      </Menu>

      <Routes>
        <Route path="/" element={<Vitrine />} />
        <Route path="/products" element={<HorseList />} />
        <Route path="/join_us" element={<h1>Nous Rejoindre</h1>} />
        <Route path="/about" element={<h1>À propos</h1>} />
        <Route path="/settings" element={<h1>Paramètres</h1>} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App