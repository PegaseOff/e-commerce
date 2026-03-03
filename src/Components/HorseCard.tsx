import "../Style/HorseCard.css"
import { Button, Card, CardBody, CardFooter, CardHeader, CardImage } from '@pegaseoff/pegase-ds';
interface HorseCardProps {
  name: string
  breed: string
  origin: string
  description: string
  image: string
}

const HorseCard = ({ name, breed, origin, description, image }: HorseCardProps) => {
  return (
    // <div className="horse-card">
    //   <img src={image} alt={name} />
    //   <h3>{name}</h3>
    //   <p><strong>Race :</strong> {breed}</p>
    //   <p><strong>Origine :</strong> {origin}</p>
    //   <p>{description}</p>
    // </div>
    <Card size="large">
        <CardImage src={image} alt={name} />
        <CardHeader>
          <h3 className="ds-card-title">{name}</h3>
        </CardHeader>
        <CardBody>
          <p>{description}</p>
        </CardBody>
        <CardFooter>
          <Button variant="primary" size="medium">Louer</Button>
          <Button variant="success" size="medium">Acheter</Button>
        </CardFooter>
    </Card>
  )
}

export default HorseCard