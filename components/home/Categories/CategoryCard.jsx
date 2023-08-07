import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./categoryCard.style";
import { useNavigation } from "@react-navigation/native";

function CategoryCard({ item }) {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("ServiceView", { item })}
        >
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.photo }} style={styles.image} />
              <Text>{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default CategoryCard;
