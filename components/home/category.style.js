import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginHorizontal: 12,
  },
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  headerTitle: {
    fontFamily: "medium",
    fontSize: SIZES.xLarge - 2,
    marginTop: -7,
  },
});

export default styles;
