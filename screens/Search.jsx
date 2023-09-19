import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ServiceArea from "../components/Service/ServiceArea";

const API_URL = "http://192.168.0.105:5000/all/items";

function Search() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`http://192.168.0.105:5000/all/items`);
      setItems(response.data || []);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = items.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.location.toLowerCase().includes(text.toLowerCase()) ||
        item.category.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredItems(filtered);
    setSelectedItem(null); // Clear selected item when user starts typing
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.searchContainer}>
          <View style={styles.SearchWrapper}>
            <TextInput
              style={styles.SearchInput}
              placeholder="What are you looking for"
              value={query}
              onChangeText={handleSearch}
            />
          </View>
          <TouchableOpacity style={styles.SearchBtn}>
            <Feather name="search" size={24} style={styles.SearchIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.suggestionsContainer}>
          {filteredItems.length === 0 ? (
            <Text>No User found</Text>
          ) : (
            <FlatList
              data={filteredItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <ServiceArea item={item}></ServiceArea>}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Search;
