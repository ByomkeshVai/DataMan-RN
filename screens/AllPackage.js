import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./AllPackage.style";
import { COLORS, SIZES } from "../constants/theme";
import Subscription from "../components/subscription/Subscription";
import axios from "axios";
import AllPackageSub from "../components/AllPackage/AllPackageSub";
import AddCategory from "./../components/AllPackage/AddCategory";

const AllPackage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.105:5000/all/category`
      );
      setCategories(response.data || []);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Customize Your
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>Package Here</Text>
      </View>
      {/* AddCategory component for selecting a category */}
      <AddCategory onAddCategory={handleAddCategory} />
      <View>
        <FlatList
          horizontal={false}
          data={categories} // Render the entire list of categories
          renderItem={({ item }) => <AllPackageSub item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllPackage;
