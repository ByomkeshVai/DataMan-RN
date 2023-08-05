import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./category.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

function Category() {
  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text style={styles.headerTitle}>Category</Text>
        <TouchableOpacity>
          <Ionicons name="ios-grid-sharp" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Category;
