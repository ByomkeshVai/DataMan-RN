import React, { useEffect, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const apiUrl = "http://192.168.0.104:5000/all/package/";

    // Fetch data using Axios and filter by category
    axios
      .get(apiUrl)
      .then((response) => {
        // Filter the response data to only include items with the matching category
        const filteredData = response.data.filter(
          (packageItem) => packageItem.category === category
        );
        setService(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [category]);

  const incrementPrice = () => {
    if (currentIndex < service.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const decrementPrice = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Set the price to 0 when currentIndex is already 0
      setCurrentIndex(0);
    }
  };

  const handleRemoveItem = (itemToRemove) => {
    // Remove the item from the 'service' state array
    const updatedService = service.filter(
      (packageItem) => packageItem !== itemToRemove
    );
    setService(updatedService);

    // Reset currentIndex if it's out of bounds after removal
    if (currentIndex >= updatedService.length) {
      setCurrentIndex(updatedService.length - 1);
    }
  };

  console.log(service);
  return (
    <View>
      {service.length > 0 ? (
        <View style={styles.container}>
          <SinglePackage
            item={service[currentIndex]}
            incrementPrice={incrementPrice}
            decrementPrice={decrementPrice}
            onRemove={handleRemoveItem}
          />
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default AllPackageSub;
