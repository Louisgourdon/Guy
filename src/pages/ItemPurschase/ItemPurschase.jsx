import React from "react";
import { Cards } from "../../components/Cards";
import { SizeDropdown } from "../../components/SizeDropdown";
import "./style.css";

export const ItemPurschase = () => {
  return (
    <div className="item-purschase">
      <div className="div-2">
        <div className="frame-2">
          <Cards
            cart="../../static/img/cart-8.svg"
            className="cards-instance"
            fav="/img/fav-8.svg"
            sizeDropdownArrowIconClassName="design-component-instance-node"
            stateProp="default"
            using="desktop"
          />
          <Cards
            cart="../../static/img/cart-7.svg"
            className="cards-2"
            fav="../../static/img/fav-7.svg"
            sizeDropdownArrowIconClassName="cards-3"
            stateProp="default"
            using="desktop"
          />
          <Cards
            cart="../../static/img/cart-6.svg"
            className="cards-2"
            fav="../../static/img/fav-6.svg"
            sizeDropdownArrowIcon="../../static/img/cart-4.png"
            sizeDropdownArrowIconClassName="cards-4"
            stateProp="default"
            using="desktop"
          />
          <div className="cards-5">
            <div className="klipartz-wrapper">
              <img className="klipartz" alt="Klipartz" src="../../static/img/klipartz-1-4.png" />
            </div>
            <div className="content-container-2">
              <div className="title-price-3">
                <div className="title-wrapper">
                  <div className="title-3">Classic</div>
                </div>
                <div className="price-2">
                  <div className="text-wrapper-8">49,99€</div>
                </div>
              </div>
              <div className="cart-size-2">
                <SizeDropdown
                  arrowIcon="../../static/img/cart-4.png"
                  arrowIconClassName="size-dropdown-6"
                  className="size-dropdown-3"
                  deployed={false}
                  dropdownContainerClassName="size-dropdown-4"
                  labelIconClassName="size-dropdown-5"
                />
                <img className="fav" alt="Fav" src="../../static/img/cart-4.png" />
                <img className="cart" alt="Cart" src="../../static/img/cart-4.png" />
              </div>
            </div>
          </div>
          <div className="cards-6">
            <div className="klipartz-wrapper">
              <img className="klipartz" alt="Klipartz" src="../../static/img/klipartz-1-4.png" />
            </div>
            <div className="content-container-2">
              <div className="title-price-3">
                <div className="title-wrapper">
                  <div className="title-3">Classic</div>
                </div>
                <div className="price-2">
                  <div className="text-wrapper-8">49,99€</div>
                </div>
              </div>
              <div className="cart-size-2">
                <SizeDropdown
                  arrowIcon="../../static/img/cart-4.png"
                  arrowIconClassName="size-dropdown-7"
                  className="size-dropdown-3"
                  deployed={false}
                  dropdownContainerClassName="size-dropdown-4"
                  labelIconClassName="size-dropdown-5"
                />
                <img className="fav-2" alt="Fav" src="../../static/img/cart-4.png" />
                <img className="cart-2" alt="Cart" src="../../static/img/cart-4.png" />
              </div>
            </div>
          </div>
          <div className="cards-6">
            <div className="klipartz-wrapper">
              <img className="klipartz" alt="Klipartz" src="../../static/img/klipartz-1-4.png" />
            </div>
            <div className="content-container-2">
              <div className="title-price-3">
                <div className="title-wrapper">
                  <div className="title-3">Classic</div>
                </div>
                <div className="price-2">
                  <div className="text-wrapper-8">49,99€</div>
                </div>
              </div>
              <div className="cart-size-2">
                <SizeDropdown
                  arrowIcon="/img/cart.png"
                  arrowIconClassName="size-dropdown-8"
                  className="size-dropdown-3"
                  deployed={false}
                  dropdownContainerClassName="size-dropdown-4"
                  labelIconClassName="size-dropdown-5"
                />
                <img className="fav-3" alt="Fav" src="../../static/img/cart.png" />
                <img className="cart-3" alt="Cart" src="../../static/img/cart.png" />
              </div>
            </div>
          </div>
          <Cards
            cart="../../static/img/cart.png"
            cartClassName="cards-9"
            className="cards-10"
            fav="../../static/img/cart.png"
            favClassName="cards-8"
            imgContainerClassName="cards-7"
            sizeDropdownArrowIcon="../../static/img/cart.png"
            sizeDropdownArrowIconClassName="cards-11"
            stateProp="default"
            using="desktop"
          />
          <Cards
            cart="../../static/img/cart.png"
            cartClassName="cards-16"
            className="cards-12"
            fav="../../static/img/cart.png"
            favClassName="cards-15"
            imgContainerClassName="cards-13"
            sizeDropdownArrowIcon="../../static/img/cart.png"
            sizeDropdownArrowIconClassName="cards-14"
            stateProp="default"
            using="desktop"
          />
          <Cards
            cart="../../static/img/cart.png"
            cartClassName="cards-20"
            className="cards-12"
            fav="../../static/img/cart.png"
            favClassName="cards-19"
            imgContainerClassName="cards-17"
            sizeDropdownArrowIcon="../../static/img/cart.png"
            sizeDropdownArrowIconClassName="cards-18"
            stateProp="default"
            using="desktop"
          />
        </div>
        <div className="title-4">Filtrer</div>
        <div className="frame-3">
          <img className="vector" alt="Vector" src="../../static/img/vector-19-1.svg" />
          <div className="label-2">Prix croissants</div>
        </div>
        <div className="frame-4">
          <img className="vector-2" alt="Vector" src="../../static/img/vector-19.svg" />
          <div className="label-2">Prix décroissants</div>
        </div>
        <div className="label-wrapper">
          <div className="label-2">Taille</div>
        </div>
        <div className="sizes-2">
          <div className="text-wrapper-9">XXL</div>
          <div className="text-wrapper-10">XL</div>
          <div className="text-wrapper-11">L</div>
          <div className="text-wrapper-12">M</div>
          <div className="text-wrapper-13">S</div>
          <div className="text-wrapper-14">XS</div>
          <div className="text-wrapper-15">XXS</div>
        </div>
        <header className="header">
          <div className="header-left-section">
            <img className="menu" alt="Menu" src="../../../static/img/menu.svg" />
            <div className="logo-wrapper">
              <div className="logo">
                <div className="overlap">
                  <div className="bar">
                    <div className="overlap-group">
                      <img className="vector-3" alt="Vector" src="../../static/img/vector-8.svg" />
                      <img className="ellipse" alt="Ellipse" src="../../static/img/ellipse-11.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right-section">
            <div className="search-bar">
              <div className="label-3">Rechercher...</div>
              <div className="search-icon">
                <div className="overlap-group-2">
                  <div className="ellipse-2" />
                  <img className="vector-4" alt="Vector" src="../../static/img/vector-12.svg" />
                </div>
              </div>
            </div>
            <div className="div-3">
              <img className="fav-icon-2" alt="Fav icon" src="../../static/img/fav-icon-1.png" />
            </div>
            <img className="price-3" alt="Price" src="../../static/img/price.svg" />
            <div className="div-3">
              <div className="account-icon">
                <img className="rectangle" alt="Rectangle" src="../../static/img/rectangle-11.svg" />
                <div className="ellipse-3" />
              </div>
            </div>
          </div>
        </header>
        {/* <img className="image" alt="Image" src="/img/image-2.png" />
        <img className="image-2" alt="Image" src="/img/image-1.png" /> */}
      </div>
    </div>
  );
};
