import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SIZES } from "../../../constants/theme";
import CategoryCard from "./CategoryCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";

function CategoryList() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.100:5000/all/category`
      );
      setCategory(response.data || []);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

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
