import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./AllPackage.style";
import { COLORS, SIZES } from "../constants/theme";
import Subscription from "../components/subscription/Subscription";
import axios from "axios";
import AllPackageSub from "../components/AllPackage/AllPackageSub";

const AllPackage = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `http://192.168.0.104:5000/all/category`
      );
      setCategory(response.data || []);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Customize Your
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>Package Here</Text>
      </View>
      <View>
        <FlatList
          horizontal={false}
          data={category}
          renderItem={({ item }) => <AllPackageSub item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllPackage;
