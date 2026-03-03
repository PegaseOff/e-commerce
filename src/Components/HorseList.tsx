import HorseCard from "./HorseCard"
import "../Style/HorseList.css"
import horses from "../data/horses.json"

const HorseList = () => {
  return (
    <div >
      <h1>🐎 Nos Chevaux</h1>
      <div className="horse-list">
        {horses.map((horse) => (
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