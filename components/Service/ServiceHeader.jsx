import { View, Text } from "react-native";
import React from "react";
import styles from "./serviceHeader.style";
import { COLORS, SIZES } from "../../constants/theme";

const ServiceHeader = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
        Best {item.category} Service
      </Text>
      <Text style={styles.welcomeTxt(COLORS.primary, 0)}>In Community</Text>
    </View>
  );
};

export default ServiceHeader;
