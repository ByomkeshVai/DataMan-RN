import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import axios from "axios"; // Import Axios for making HTTP requests
import styles from "./SingleSub.style";
import { AuthContext } from "../providers/AuthProvider";

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
    const purchaseApiUrl = `http://192.168.0.100:5000/user/purchase/${userEmail}`; // Replace with your purchase API URL

    axios
      .post(purchaseApiUrl, userSelectedData)
      .then((response) => {
        // Handle the API response, if needed
        console.log("Data saved successfully", response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error("Error saving data:", error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.durationContainer}>
          <Text>Duration: {item.duration} Days</Text>
        </View>
        <View>
          <Text>Price: {item.price} ৳</Text>
        </View>
      </View>
      <View>
        <View style={styles.incrContainer}>
          <TouchableOpacity onPress={decrementPrice}>
            <Text style={styles.incrText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={incrementPrice}>
            <Text style={styles.incrText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handlePurchase}>
          <Text style={styles.purchaseInfo}>Purchase</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleSub;
