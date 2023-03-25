import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <nav class="navbarsm navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid mx-4">
          <a class="navbar-brand" href="#"><img className='ms-5 navbar-logo img-fluid' src="././img/great-16-9.png" alt="logo de great templates" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="ul-navbar navbar-nav d-flex justify-content-between">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Plantillas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Tienda online</a></li>
                  <li><a class="dropdown-item" href="#">Portafolio</a></li>
                  <li><a class="dropdown-item" href="#">Membresía</a></li>
                  <li><a class="dropdown-item" href="#">Blog</a></li>
                  <li><a class="dropdown-item" href="#">Planificación</a></li>
                  <li><a class="dropdown-item" href="#">App</a></li>
                  
                </ul>
              </li>
            </ul>
          </div>
            <CartWidget />
        </div>
      </nav>
    </header>
  )
}

export default NavBar