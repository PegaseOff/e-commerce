import HorseCard from "./HorseCard"
import {type Horse} from "../types/Horse"
import "../Style/HorseList.css"

interface HorseListProps {
  horses: Horse[]
}

const HorseList = ({ horses }: HorseListProps) => {
  return (
    <div className="horse-list">
      <h1>🐎 Nos Chevaux</h1>
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
  )
}

export default HorseList