import { Dimensions } from "react-native";
const { height, width } = Dimensions.get(window);

const COLORS = {
  primary: " 2A4D50",
  secondary: " DDFOFF",
  tertiary: "#FF7754",
  gray: "#83829A",
  gray2: "aC1C0C8",
  offwhite: "aF3F4F8",
  white: "aFFFFFF",
  black: "2000000",
  red: "Fe8le4d",
  green: " $00C135",
  lightwhite: "#FAFAFC",
};

const SIZES = {
  Small: 10,
  small: 12,
  medium: 16,
  Large: 20,
  XLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
