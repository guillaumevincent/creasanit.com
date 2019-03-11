import React from "react";
import PropTypes from "prop-types";

const Header = props => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      <span className="icon fa-worker" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Creasanit</h1>
        <p>
          Crea Sanit est une entreprise de plomberie installée au pian medoc.
          nous sommes présents sur toute la région afin de vous aider dans la
          réalisation de vos travaux de salle de bain, plomberie et chauffage.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("notre_activite");
            }}
          >
            Notre activité
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("plomberie_sanitaire");
            }}
          >
            Plomberie/Sanitaire
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("chauffage_climatisation");
            }}
          >
            Chauffage/Climatisation
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle("depannage");
            }}
          >
            Dépannage
          </a>
        </li>
        <li>
          <a href="mailto:contact@creasanit.com">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
