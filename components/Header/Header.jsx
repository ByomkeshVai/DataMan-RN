import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./header.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <TouchableOpacity onPressIn={() => navigation.navigate("Profile")}>
          <FontAwesome5 name="user-circle" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.userName}>Habib Rahman</Text>
      </View>
    </View>
  );
};

export default Header;
