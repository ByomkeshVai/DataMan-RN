import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./categoryCard.style";

function CategoryCard({ item }) {
  return (
    <View>
      <ScrollView>
        <TouchableOpacity onPress={() => {}}>
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
