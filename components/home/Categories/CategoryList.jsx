import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import { SIZES } from "../../../constants/theme";
import CategoryCard from "./CategoryCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function CategoryList() {
  const category = [
    {
      id: "1",
      name: "Plumber",
      photo:
        "https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/services-plumber-icon.png",
    },
    {
      id: "2",
      name: "Electrician",
      photo: "https://cdn-icons-png.flaticon.com/512/1983/1983275.png",
    },
    {
      id: "3",
      name: "Driver",
      photo: "https://cdn-icons-png.flaticon.com/512/1581/1581908.png",
    },
    {
      id: "4",
      name: "Engineer",
      photo: "https://cdn-icons-png.flaticon.com/512/3700/3700845.png",
    },
    {
      id: "5",
      name: "Doctor",
      photo: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },
    {
      id: "6",
      name: "Cleaner",
      photo: "https://cdn-icons-png.flaticon.com/512/1500/1500114.png",
    },
    {
      id: "7",
      name: "Mechanic",
      photo: "https://cdn-icons-png.flaticon.com/512/4284/4284214.png",
    },
    {
      id: "8",
      name: "Shopkeeper",
      photo: "https://cdn-icons-png.flaticon.com/512/7195/7195537.png",
    },
    // ... Add the rest of your items here
  ];

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={category}
          numColumns={4}
          renderItem={({ item }) => <CategoryCard item={item} />}
          contentContainerStyle={{ rowGap: SIZES.small }}
        />
      </View>
    </SafeAreaView>
  );
}
export default CategoryList;
