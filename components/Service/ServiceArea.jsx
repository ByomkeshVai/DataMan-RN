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
import Subscription from "../subscription/Subscription";

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
        <View style={styles.infoSide}>
          <TouchableOpacity style={styles.rating}>
            <Text>Rating: </Text>
            <Feather name="star" size={16} color="black" />
            <Feather name="star" size={16} color="black" />
            <Feather name="star" size={16} color="black" />
            <Feather name="star" size={16} color="black" />
            <Feather name="star" size={16} color="black" />
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.contactInfo}>
              <Feather name="phone-call" size={20} color="black" />
              <Text>Contact Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ServiceArea;
