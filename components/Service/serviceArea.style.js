import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "#C1ECE4",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    justifyContent: "space-between",
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  phoneCall: {
    textAlign: "right",
  },
  welcomeTxt: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    lineHeight: 30,
  },
  locationStyle: {
    marginTop: 10,
    flexDirection: "row",
    gap: 2,
  },
  locationLogo: {
    marginTop: 1,
  },
  category: {
    fontSize: SIZES.small,
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
    borderRadius: 50,
    // resizeMode: "cover", // Adjust the resizeMode according to your needs
  },

  SearchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
    marginBottom: 15,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  infoSide: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderColor: "black", // Border color
    borderRadius: 10, // Border radius
    borderStyle: "solid",
    padding: 10,
    marginTop: 16,
    backgroundColor: "#54C57D",
  },
});

export default styles;
