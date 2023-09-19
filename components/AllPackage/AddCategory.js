import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./AddCategory.style"; // Style your component as needed
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddCategory = ({ onAddCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.105:5000/all/category`
      );
      // Update the categories prop with the latest data
      setCategories(response.data || []);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddCategory = () => {
    if (selectedCategory !== "") {
      onAddCategory(selectedCategory);
      setSelectedCategory("");
    }
  };

  // Extract unique category labels from the categories array
  const uniqueCategoryLabels = [
    ...new Set(categories.map((category) => category)),
  ];

  return (
    <View>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={{ marginTop: 0 }}
        prompt=""
      >
        <Picker.Item
          label="Select a category"
          value=""
          style={{ marginBottom: 0 }}
        />
        {uniqueCategoryLabels.map((label) => (
          <Picker.Item key={label} label={label.category} value={label} />
        ))}
      </Picker>
      <TouchableOpacity onPress={handleAddCategory}>
        <Text style={styles.addCategoryButton}>Add Category</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCategory;
