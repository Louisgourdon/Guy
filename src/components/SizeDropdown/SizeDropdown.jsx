/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const SizeDropdown = ({
  deployed,
  className,
  dropdownContainerClassName,
  labelIconClassName,
  arrowIconClassName,
  arrowIcon = "/img/arrow-icon-9.svg",
  onClick,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    deployed: deployed,
  });

  return (
    <div className={`size-dropdown deployed-${state.deployed} ${className}`} onClick={onClick}>
      <div
        className={`dropdown-container ${dropdownContainerClassName}`}
        onClick={() => {
          dispatch("click_361");
        }}
      >
        <div className={`label-icon ${labelIconClassName}`}>
          <div className="label">Select your size</div>
          <img className={`arrow-icon ${arrowIconClassName}`} alt="Arrow icon" src={arrowIcon} />
        </div>
      </div>
      <div className="sizes">
        <div className="text-wrapper">XXL</div>
        <div className="div">XL</div>
        <div className="text-wrapper-2">L</div>
        <div className="text-wrapper-3">M</div>
        <div className="text-wrapper-4">S</div>
        <div className="text-wrapper-5">XS</div>
        <div className="text-wrapper-6">XXS</div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        deployed: true,
      };

    case "click_361":
      return {
        ...state,
        deployed: false,
      };
  }

  return state;
}

SizeDropdown.propTypes = {
  deployed: PropTypes.bool,
  arrowIcon: PropTypes.string,
};
