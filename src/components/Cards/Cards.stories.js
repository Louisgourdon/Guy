import { Cards } from ".";

export default {
  title: "Components/Cards",
  component: Cards,
  argTypes: {
    using: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "deployed", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    using: "desktop",
    stateProp: "hover",
    className: {},
    sizeDropdownArrowIconClassName: {},
    fav: "../../static/img/fav-9.svg",
    cart: "../../static/img/cart-9.svg",
    sizeDropdownArrowIcon: "../../static/img/arrow-icon-11.png",
    imgContainerClassName: {},
    favClassName: {},
    cartClassName: {},
  },
};
