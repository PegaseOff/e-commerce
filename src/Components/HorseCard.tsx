import { useState } from "react"
import "../Style/HorseCard.css"
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, CardImage } from '@pegaseoff/pegase-ds';
interface HorseCardProps {
  name: string
  breed: string
  origin: string
  description: string
  image: string
}

const HorseCard = ({ name, breed, origin, description, image }: HorseCardProps) => {
  const [zooming, setZooming] = useState(false)

  const handleLouer = () => {
    setZooming(true)
    setTimeout(() => setZooming(false), 1000)
  }

  return (
    <>
    {zooming && (
      <img src={image} alt={name} className="image-fullscreen" />
    )}
    <Card size="large">
        <CardImage src={image} alt={name} />
        <CardHeader>
          <h3 className="ds-card-title">{name}</h3>
          <div className="flex-row gap-sm">
            <Badge variant="secondary">{origin}</Badge>
            <Badge variant="info">{breed}</Badge>
          </div>
        </CardHeader>
        <CardBody>
          <p>{description}</p>
        </CardBody>
        <CardFooter>
          <Button variant="primary" size="medium" onClick={handleLouer}>Louer</Button>
          <Button variant="success" size="medium">Acheter</Button>
        </CardFooter>
    </Card>
    </>
  )
}

export default HorseCard