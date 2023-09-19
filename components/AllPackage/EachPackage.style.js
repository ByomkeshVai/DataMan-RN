import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     borderRadius: SIZES.medium,
  //     marginTop: 10,
  //     backgroundColor: "#C1ECE4",
  //     padding: 20,
  //     borderRadius: 15,
  //     flexDirection: "row",
  //     alignItems: "center",
  //     gap: 13,
  //     justifyContent: "space-between",
  //     marginHorizontal: 12,
  //   },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  phoneCall: {
    textAlign: "right",
  },
  incrText: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "bold",
    fontSize: SIZES.medium,
    alignItems: "center",
    borderWidth: 0, // Border width
    borderColor: "black", // Border color
    backgroundColor: "#254547",
    borderRadius: 90, // Border radius for rounded corners
    // Padding (optional)
    paddingHorizontal: 10,
  },
  locationStyle: {
    marginTop: 10,
    flexDirection: "row",
    gap: 2,
    lineHeight: 20,
    width: 130,
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
  purchaseInfo: {
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
  incrContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  detection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  allPurchase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  miniContainer: {
    flex: 1,
    borderRadius: SIZES.medium,
    marginTop: 10,
    backgroundColor: "#C1ECE4",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
});

export default styles;
