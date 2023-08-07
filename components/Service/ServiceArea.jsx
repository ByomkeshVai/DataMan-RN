import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../Header/Header";
import styles from "./serviceArea.style";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ServiceArea = ({ item }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.description}>
          <Image source={{ uri: item.photo }} style={styles.image} />
          <View>
            <Text style={styles.welcomeTxt}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <View style={styles.locationStyle}>
              <Entypo
                style={styles.locationLogo}
                name="location-pin"
                size={20}
                color="black"
              />
              <Text>{item.location}</Text>
            </View>
          </View>
        </View>
        <View style={styles.phoneCall}>
          <TouchableOpacity>
            <Feather name="phone-call" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ServiceArea;
