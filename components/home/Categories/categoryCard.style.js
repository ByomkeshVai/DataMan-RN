import { COLORS, SIZES } from "../../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    // backgroundColor: COLORS.primary,
  },
  imageContainer: {
    borderRadius: SIZES.small,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    // resizeMode: "cover", // Adjust the resizeMode according to your needs
  },
});

export default styles;
