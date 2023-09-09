import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import styles from "./serviceArea.style";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Subscription from "../subscription/Subscription";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";
import { Button } from "react-native";
import { Linking } from "react-native";
import { PermissionsAndroid } from "react-native";

// const deviceWidth = Dimensions.get("window").width;
// const deviceHeight =
//   Platform.OS === "ios"
//     ? Dimensions.get("window").height
//     : require("react-native-extra-dimensions-android").get(
//         "REAL_WINDOW_HEIGHT"
//       );

const ServiceArea = ({ item }) => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const category = item.category;
  const [phone1, setPhone1] = useState("");
  const [error, setError] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCheckSubscription = (userID) => {
    axios
      .get(`http://192.168.0.100:5000/check-subscription`, {
        params: { email, category, userID }, // Send userID as a parameter
      })
      .then((response) => {
        if (response.data.phone1) {
          setPhone1(response.data.phone1);
          setError("");
          toggleModal();
        } else {
          setPhone1("");
          setError("Buy subscription");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setPhone1("");
        setError("Error occurred");
      });
  };

  const openDialPad = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        {
          title: "Phone Call Permission",
          message: "This app needs access to make phone calls.",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const phoneNumber = phone1;
        const url = `tel:${phoneNumber}`;
        Linking.openURL(url);
      } else {
        console.warn("Phone call permission denied.");
      }
    } catch (err) {
      console.error("An error occurred while requesting permission:", err);
    }
  };
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
            <TouchableOpacity
              style={styles.contactInfo}
              onPress={() => handleCheckSubscription(item?.userID)}
            >
              <Feather name="phone-call" size={20} color="black" />
              <Text>Contact Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        // deviceWidth={deviceWidth}
        // deviceHeight={deviceHeight}
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="left"
      >
        <View style={styles.container}>
          <Text>{phone1}</Text>
          <Button title="Call" onPress={openDialPad} />
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ServiceArea;
