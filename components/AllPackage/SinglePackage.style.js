import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  miniContainer: {
    flex: 1,
    borderRadius: SIZES.medium,
    marginTop: 10,
    backgroundColor: "#C1ECE4",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
});

export default styles;
