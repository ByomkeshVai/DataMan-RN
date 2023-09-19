import React, { useEffect, useState, useMemo } from "react";
import { View, Text } from "react-native";
import styles from "./AllPackageSub.style";
import axios from "axios";
import { FlatList } from "react-native";
import SinglePackage from "./SinglePackage";
import { SIZES } from "../../constants/theme";
import SingleSub from "../subscription/SingleSub";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

const AllPackageSub = ({ item }) => {
  const [service, setService] = useState([]);
  const category = item.category;

  useEffect(() => {
    const apiUrl = "http://192.168.0.105:5000/all/package/";

    axios
      .get(apiUrl)
      .then((response) => {
        // Filter the response data to only include items with the matching category
        const filteredData = response.data.filter(
          (packageItem) => packageItem.category === item.category
        );

        // Merge the new items with the existing items
        setService((prevService) => [...prevService, ...filteredData]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [item.category]);

  const handleRemoveItem = (itemToRemove) => {
    // Remove the item from the 'service' state array
    const updatedService = service.filter(
      (packageItem) => packageItem == itemToRemove
    );
    setService(updatedService);
  };

  return (
    <View>
      {service.length > 0 ? (
        <View style={styles.container}>
          <SinglePackage item={service} handleRemoveItem={handleRemoveItem} />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default AllPackageSub;
