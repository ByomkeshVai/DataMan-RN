import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../screens/Home.style.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Greeting from "../components/home/Greeting.jsx";
import Carousel from "../components/home/Carousel.jsx";
import Category from "../components/home/Category.jsx";
import CategoryList from "../components/home/Categories/CategoryList.jsx";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <MaterialCommunityIcons name="face-man-profile" size={28} />
          <Text style={styles.userName}>Habib Rahman</Text>
        </View>
      </View>
      <ScrollView>
        <Greeting />

        <Category />
        <CategoryList />
        <Carousel />
      </ScrollView>
    </SafeAreaView>
  );
}
