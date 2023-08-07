import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 25,
  },
  welcomeTxt: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 4,
    marginTop: 10,
    color: color,
    lineHeight: 30,
    marginHorizontal: SIZES.small,
  }),
});

export default styles;
