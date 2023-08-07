import { View, Text } from "react-native";
import React from "react";
import styles from "./header.style";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <FontAwesome5 name="user-circle" size={28} color="black" />
        <Text style={styles.userName}>Habib Rahman</Text>
      </View>
    </View>
  );
};

export default Header;
