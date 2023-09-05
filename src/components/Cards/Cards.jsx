/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { SizeDropdown } from "../SizeDropdown";
import "./style.css";

export const Cards = ({
  using,
  stateProp,
  className,
  sizeDropdownArrowIconClassName,
  fav = "../../static/img/fav-9.svg",
  cart = "../../static/img/cart-9.svg",
  sizeDropdownArrowIcon = "../../static/img/arrow-icon-11.png",
  imgContainerClassName,
  favClassName,
  cartClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    using: using || "mobile",
    state: stateProp || "default",
  });

  return (
    <div
      className={`cards ${state.using} ${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`img-container ${imgContainerClassName}`} />
      <div className="content-container">
        {state.using === "mobile" && (
          <>
            <div className="title-price">
              <div className="title">Classic</div>
              <div className="price">50€</div>
            </div>
            <img className="fav-icon" alt="Fav icon" src="../../static/img/fav-icon.svg" />
          </>
        )}

        {state.using === "desktop" && (
          <>
            <div className="title-price-2">
              <div className="frame">
                <div className="title-2">Classic</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-7">49,99€</div>
              </div>
            </div>
            <div className="cart-size">
              <SizeDropdown
                arrowIcon={sizeDropdownArrowIcon}
                arrowIconClassName={sizeDropdownArrowIconClassName}
                className="size-dropdown-instance"
                deployed={state.state === "deployed" ? true : undefined}
                dropdownContainerClassName="instance-node"
                labelIconClassName="size-dropdown-2"
                onClick={() => {
                  dispatch("click");
                }}
              />
              <img
                className={`img ${favClassName}`}
                alt="Fav"
                src={
                  state.state === "deployed" ? "/img/fav-10.svg" : state.state === "default" ? fav : "../../static/img/fav-11.svg"
                }
              />
              <img
                className={`img ${cartClassName}`}
                alt="Cart"
                src={
                  state.state === "deployed"
                    ? "../../static/img/cart-10.svg"
                    : state.state === "default"
                    ? cart
                    : "../../static/img/cart-11.svg"
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "hover" && state.using === "desktop") {
    switch (action) {
      case "click":
        return {
          state: "deployed",
          using: "desktop",
        };
    }
  }

  if (state.state === "default" && state.using === "desktop") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
          using: "desktop",
        };
    }
  }

  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Cards.propTypes = {
  using: PropTypes.oneOf(["desktop", "mobile"]),
  stateProp: PropTypes.oneOf(["hover", "deployed", "default"]),
  fav: PropTypes.string,
  cart: PropTypes.string,
  sizeDropdownArrowIcon: PropTypes.string,
};
