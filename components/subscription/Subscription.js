import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "../Header/Header";
import styles from "./Subscription.style";
import axios from "axios";
import SingleSub from "./SingleSub";

const Subscription = ({ item }) => {
  const [service, setService] = useState([]);
  const category = item.category;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const apiUrl = "http://192.168.0.100:5000/all/package/";

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
    }
  };

  return (
    <View style={styles.subscriptionContainer}>
      {service.length > 0 ? (
        <>
          <SingleSub
            item={service[currentIndex]}
            incrementPrice={incrementPrice}
            decrementPrice={decrementPrice}
          />
          <View></View>
        </>
      ) : (
        <Text>No packages available for this category.</Text>
      )}
    </View>
  );
};

export default Subscription;
