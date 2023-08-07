import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../screens/Home.style.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Greeting from "../components/home/Greeting.jsx";
import Carousel from "../components/home/Carousel.jsx";
import Category from "../components/home/Category.jsx";
import CategoryList from "../components/home/Categories/CategoryList.jsx";
import Header from "../components/Header/Header.jsx";

export default function Home() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <Greeting />

        <Category />
        <CategoryList />
        <Carousel />
      </ScrollView>
    </SafeAreaView>
  );
}
