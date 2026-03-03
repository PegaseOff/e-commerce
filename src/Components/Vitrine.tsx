import React from "react"
import { Link } from "react-router-dom"
import "../Style/Vitrine.css"

const Vitrine = () => {
  return (
    <div className="vitrine">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>🐎 Excellence Équine</h1>
          <p>
            Découvrez des chevaux d’exception sélectionnés pour leur beauté,
            leur puissance et leur élégance.
          </p>
          <Link to="/" className="cta-btn">
            Voir nos chevaux
          </Link>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="about">
        <h2>Notre Passion</h2>
        <p>
          Nous proposons des chevaux soigneusement sélectionnés, adaptés aussi bien
          aux compétitions qu’à l’équitation de loisir. Chaque cheval est suivi
          avec attention pour garantir qualité et bien-être.
        </p>
      </section>

      {/* AVANTAGES */}
      <section className="features">
        <div className="feature-card">
          <h3>🏇 Chevaux sélectionnés</h3>
          <p>Des races prestigieuses choisies pour leurs performances.</p>
        </div>

        <div className="feature-card">
          <h3>🌍 Origines certifiées</h3>
          <p>Traçabilité et pedigree garantis.</p>
        </div>

        <div className="feature-card">
          <h3>❤️ Bien-être prioritaire</h3>
          <p>Respect, soins et environnement adapté.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <h2>Prêt à trouver votre compagnon idéal ?</h2>
        <Link to="/" className="cta-btn">
          Explorer la collection
        </Link>
      </section>

    </div>
  )
}

export default Vitrine