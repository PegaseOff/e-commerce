import "../Style/HorseCard.css"

interface HorseCardProps {
  name: string
  breed: string
  origin: string
  description: string
  image: string
}

const HorseCard = ({ name, breed, origin, description, image }: HorseCardProps) => {
  return (
    <div className="horse-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><strong>Race :</strong> {breed}</p>
      <p><strong>Origine :</strong> {origin}</p>
      <p>{description}</p>
    </div>
  )
}

export default HorseCard