import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-worker" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Creasanit</h1>
        <p>
          Creasanit est une entreprise de plomberie installé en Aquitaine. Nous
          sommes présents sur toute la région afin de vous aider dans la
          réalisation de vos travaux de salle de bain, sanitaire.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('notre_travail')
            }}
          >
            Notre travail
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            A propos
          </a>
        </li>
        <li>
          <a href="mailto:contact@creasanit.com">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
