import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./style.css";

export const HomeDesktop = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();  // Ajout de useNavigate

  // ... autres codes

  const goToProducts = () => {
    navigate('/products');  // Navigue vers la page Products
  };
  const [searchTerm, setSearchTerm] = useState('');  // État pour la barre de recherche
  
  // Mettre à jour searchTerm chaque fois que l'utilisateur tape dans la barre de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fonction pour effectuer la recherche
  const performSearch = () => {
    console.log(`Performing search for: ${searchTerm}`);
    // Ici, vous pouvez ajouter une logique pour effectuer la recherche
  };
  return (
    <div className="home-desktop">
      <div className="div">
        <div className="frame">
          {/* Sneackers */}
          <a href="frontv3\src\screens\Products\ShoesThree\src\pages\index.tsx">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="element" alt="Element" src="/img/99589114-5383-4429-9f1f-dfc468310e01-1.png" />
              <img className="title" alt="Title" src="/img/title-4.svg" />
            </div>
          </div>
          </a>
          {/* Sneackers */}
          {/* Sweatshirts */}
          
          <div className="title-wrapper">
            <img className="img" alt="Title" src="/img/title-3.svg"  />
          </div>
        
          {/* Sweatshirts */}
          {/* Tee-shirts */}
          {/* <a href="/teeshirts"> */}
          <div className="overlap-wrapper">
            <div className="overlap">
              <img className="title-2" alt="Title" src="/img/title-2.svg" />
            </div>
          </div>
          {/* </a> */}
          {/* Tee-shirts */}
          {/* Caleçons */}
          
          <div className="img-wrapper" >
            <img className="title-3" alt="Title" src="/img/title-1.svg" />
          </div>
          
          {/* Caleçons */}
          {/* Accessoires */}
          {/* <a href="/accessoires"> */}
          <div className="div-wrapper">
            <div className="overlap-2">
              <img className="STREET" alt="Street" src="/img/street-5-480x480-1.png" />
              <img className="title-4" alt="Title" src="/img/title.svg" />
            </div>
          </div>
          {/* </a> */}
           {/* Accessoires */}
           
          <div className="frame-2" onClick={goToProducts}>
            <div className="text-wrapper">Voir tout</div>
            <img className="vector" alt="Vector" src="/img/vector-18.svg" />
          </div>
        </div>

        <header className="header">
          <div className="header-left-section">
             {/* Image agissant comme bouton pour ouvrir le dropdown */}
        <div onClick={toggleDropdown} className="image-as-button">
          <img className="menu" alt="Menu" src="/img/menu.svg" />
        </div>
        {isDropdownOpen && (
  <div className="dropdown-menu">
    <Link to="frontv3\src\screens\Products\ShoesThree\src\pages\index.tsx">Sneakers</Link>
    <Link to="/sweatshirts">Sweatshirts</Link>
    <Link to="/teeshirts">Tee-shirts</Link>
    <Link to="/calecons">Caleçons</Link>
    <Link to="/accessoires">Accessoires</Link>
    {/* Ajoutez d'autres liens ici */}
  </div>
        )}
            <div className="logo-wrapper">
              <div className="logo">
                <div className="bar-wrapper">
                  <div className="bar">
                    <div className="overlap-group-3">
                      <img className="vector-3" alt="Vector" src="/img/vector-8.svg" />
                      <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-11.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right-section">
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Rechercher..."
            className="label"
          />
          <div className="search-icon" onClick={performSearch}>
            <div className="overlap-group-4">
              <div className="ellipse-3" />
              <img className="vector-4" alt="Vector" src="/img/vector-12.svg" />
            </div>
          </div>
        </div>
            {/* fav icon */}
            <a href="/favoris"> 
            <div className="div-2">
              <img className="fav-icon" alt="Fav icon" src="/img/fav-icon.png" />
            </div>
            </a>
            {/* fav icon */}
            {/* Panier icon */}
            <a href="/panier"> 
            <img className="price" alt="Price" src="/img/price.svg" />
            </a>
             {/* Panier icon */}
             {/* Profile icon */}
             
            <div className="div-2">
              <div className="account-icon">
              <a href="/profile"> 
                <img className="rectangle" alt="Rectangle" src="/img/rectangle-11.svg" />
                </a>
                <div className="ellipse-4" />
              </div>
            </div>
          </div>
          
          {/* Profile icon */}
        </header>
      </div>
    </div>
  );
};
