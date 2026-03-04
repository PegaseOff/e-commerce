import HorseCard from "./HorseCard"
import "../Style/HorseList.css"
import horses from "../data/horses.json"
import { useState } from "react"
import { Input, Icon } from "@pegaseoff/pegase-ds"
import { IoSearch } from "react-icons/io5"

const HorseList = () => {
  const [search, setSearch] = useState("")

  const filteredHorses = horses.filter(horse => 
    horse.name.toLowerCase().includes(search.toLowerCase()) || 
    horse.breed.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div style={{ position: "relative", marginBottom: 20, padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ margin: 0 }}>🐎 Nos Chevaux</h1>
        <div style={{ position: "absolute", right: 140, width: 300 }}>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", zIndex: 1, pointerEvents: "none", display: "flex", color: "#666" }}>
              <Icon icon={IoSearch} variant="secondary" />
            </span>
            <Input 
              style={{ paddingLeft: 35, width: "100%" }}
              placeholder="Rechercher un cheval..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>
        </div>
      </div>
      <div className="horse-list">
        {filteredHorses.map((horse) => (
        <HorseCard
          key={horse.id}
          name={horse.name}
          breed={horse.breed}
          origin={horse.origin}
          description={horse.description}
          image={horse.image}
        />
      ))}
      </div>
    </div>
  )
}

export default HorseList