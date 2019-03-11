import React from "react";
import PropTypes from "prop-types";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      />
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="notre_activite"
          className={`${
            this.props.article === "notre_activite" ? "active" : ""
          } ${this.props.articleTimeout ? "timeout" : ""}`}
          style={{ display: "none" }}
        >
          <h2 className="major">Notre activité</h2>
          <span className="image main">
            <img src={pic1} alt="" />
          </span>
          <p>
            Située au Pian médoc, l’entreprise CREA SANIT vous accompagne dans
            l’exécution de vos travaux:
          </p>

          <ul>
            <li>Plomberie / Sanitaire</li>
            <li>Salle de bains clé en main</li>
            <li>Chauffage</li>
            <li>Energies renouvelables</li>
            <li>Dépannage</li>
          </ul>

          <p>
            En neuf ou en rénovation, nous vous proposons des solutions pour
            améliorer durablement votre confort et réaliser des économies
            d’énergie.
          </p>
          <p>
            Entreprise artisanale expérimentée, elle a su accroître son
            savoir-faire et se diversifier en se maintenant à la pointe de
            l’innovation et des tendances. Une expérience qui fait sa réputation
            et qui va de pair avec une recherche permanente de la qualité.
          </p>
          <p>
            Personnalisation de vos projets, conseils fiables, relations de
            confiance : telles sont nos valeurs pour vous aider à choisir parmi
            toutes les solutions afin de valoriser votre habitat.
          </p>
          {close}
        </article>
        <article
          id="plomberie_sanitaire"
          className={`${
            this.props.article === "plomberie_sanitaire" ? "active" : ""
          } ${this.props.articleTimeout ? "timeout" : ""}`}
          style={{ display: "none" }}
        >
          <h2 className="major">Plomberie/Sanitaire</h2>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
          <p>
            Forts de notre polyvalence et de notre expérience, nous vous
            proposons des salles de bains « clé en main » à la fois
            fonctionnelles et originales mais aussi des solutions pour les
            personnes à mobilité réduite. Conception, agencement,
            embellissement, rénovation: nos spécialistes offrent un bain de
            jouvence à votre pièce d’eau. Nous accompagnons votre projet : que
            vous souhaitiez remplacer votre baignoire par une douche à
            l’italienne tendance et facile d'accès, créer une salle d’eau dans
            une pièce inutilisée, optimiser un petit volume ou transformer une
            grande pièce en espace bien-etre, nous relevons le défi !
          </p>
          <p>
            Nous intervenons chez vous dans tous les corps de métiers :
            alimentation et évacuation d’eau, pose de matériel sanitaire, pose
            de faïence, étanchéité, électricité, etc. une seule entreprise, un
            seul interlocuteur pour votre projet.
          </p>
          {close}
        </article>
        <article
          id="chauffage_climatisation"
          className={`${
            this.props.article === "chauffage_climatisation" ? "active" : ""
          } ${this.props.articleTimeout ? "timeout" : ""}`}
          style={{ display: "none" }}
        >
          <h2 className="major">Chauffage/Climatisation</h2>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
          <p>
            Nous travaillons avec des grandes marques professionnelles, gage de
            qualité pour l’installation de divers appareils de chauffage comme
            Atlantic, Daikin ou Saunier Duval pour les pompes à chaleur
            (air/air, air/eau), les chaudières gaz, fioul et la climatisation
            gainable ou split.
          </p>
          {close}
        </article>{" "}
        <article
          id="depannage"
          className={`${this.props.article === "depannage" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Dépannage</h2>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
          <p>
            Une fuite d’eau?
            <br />
            L’entreprise prend en charge vos travaux de tuyauterie générale,
            appareils de distribution d'eau et de gaz, installation de robinets,
            de tuyaux d'évacuation pour les eaux usées, pose d'appareils de
            traitement de l'eau ou d'adoucisseurs, service de maintenance,
            nettoyage des canalisations, réparation, dépannage en cas de fuite.
            Pour tous vos travaux de plomberie, faites confiance à une
            entreprise d’expérience.
          </p>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
};

export default Main;
