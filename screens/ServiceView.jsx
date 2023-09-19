import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import ServiceArea from "../components/Service/ServiceArea";
import Header from "./../components/Header/Header";
import styles from "./ServiceView.style";
import ServiceHeader from "../components/Service/ServiceHeader";
import Subscription from "../components/subscription/Subscription";

const ServiceView = () => {
  const route = useRoute();
  const { item } = route.params;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const apiUrl = "http://192.168.0.105:5000/all/items/";
    const category = item.category;

    // Fetch data using the fetch API
    fetch(apiUrl + category)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [item.category]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <ServiceHeader item={item} />
        <View style={styles.appBarWrapper}>
          {items.map((item, index) => (
            <ServiceArea key={index} item={item} />
          ))}
        </View>
      </View>
      <View style={styles.bottomComponent}>
        <Subscription item={item} />
      </View>
    </SafeAreaView>
  );
};

export default ServiceView;
