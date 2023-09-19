import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Alert } from "react-native";
import axios from "axios"; // Import Axios for making HTTP requests
import styles from "./SingleSub.style";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigation } from "@react-navigation/native";

const SingleSub = ({ item, incrementPrice, decrementPrice }) => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  const handlePurchase = () => {
    // Make a POST request to save the selected data to the userCollection database
    const userSelectedData = {
      duration: item.duration,
      category: item.category,
      price: item.price,
    };

    // Replace this with your API endpoint for purchase
    const purchaseApiUrl = `http://192.168.0.105:5000/user/purchase/${userEmail}`;

    axios
      .post(purchaseApiUrl, userSelectedData)
      .then((response) => {
        // Handle the API response, if needed
        // console.log("Data saved successfully", response.data);
        Alert.alert(
          "Hey There!",
          "Your Purchased is Succesfull",
          [
            {
              text: "Close",
              style: "cancel",
            },
          ],
          {
            cancelable: true,
          }
        );
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error("Error saving data:", error);
      });
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.durationContainer}>
          <Text>Duration: {item.duration} Days</Text>
        </View>
        <View>
          <Text>Price: {item.price} ৳</Text>
        </View>
        <View style={styles.incrContainer}>
          <TouchableOpacity onPress={decrementPrice}>
            <Text style={styles.incrText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={incrementPrice}>
            <Text style={styles.incrText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.allPurchase}>
        <TouchableOpacity onPress={handlePurchase}>
          <Text style={styles.purchaseInfo}>Purchase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AllPackage")}>
          <Text style={styles.purchaseInfo}>All Package</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleSub;
