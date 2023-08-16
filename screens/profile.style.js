import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  package: {
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
  },
  imageContainer: {
    borderRadius: SIZES.small,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // resizeMode: "cover", // Adjust the resizeMode according to your needs
  },
  welcomeTxt: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    textAlign: "center",
    marginTop: 20,
  },
  title: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    lineHeight: 20,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    lineHeight: 20,
    textAlign: "center",
  },
  menuContainer: {
    padding: 20,
  },
  menu: {
    borderColor: "black", // Border color
    borderRadius: 10, // Border radius
    borderStyle: "solid",
    padding: 10,
    marginTop: 16,
    backgroundColor: "#54C57D",
  },
  menuText: {
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});

export default styles;
