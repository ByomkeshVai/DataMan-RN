import { COLORS, SIZES } from "../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 30,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.medium,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default styles;
