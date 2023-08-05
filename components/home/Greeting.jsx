import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./greenting.css";
import { COLORS, SIZES } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Greeting = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Find The Service
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>Near You</Text>
      </View>
      <View>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Feather name="search" size={24} style={styles.SearchIcon} />
          </TouchableOpacity>
          <View style={styles.SearchWrapper}>
            <TextInput
              style={styles.SearchInput}
              value=""
              onPressIn={() => navigation.navigate("Search")}
              placeholder="What are you looking for"
            />
          </View>
          <TouchableOpacity style={styles.SearchBtn}>
            <FontAwesome
              name="chevron-circle-right"
              color={COLORS.primary}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Greeting;
