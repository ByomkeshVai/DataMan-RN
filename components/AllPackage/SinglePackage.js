import React, { useContext } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Subscription from "../subscription/Subscription";
import AllPackageSub from "./AllPackageSub";
import SingleSub from "../subscription/SingleSub";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../providers/AuthProvider";
import styles from "./../subscription/SingleSub.style";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const SinglePackage = ({ item, incrementPrice, decrementPrice, onRemove }) => {
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
    const purchaseApiUrl = `http://192.168.0.104:5000/user/purchase/${userEmail}`;

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

  const handleRemove = () => {
    // Call the onRemove callback with the current item to be removed
    onRemove(item);
  };
  return (
    <SafeAreaView>
      <View style={styles.miniContainer}>
        <View>
          <Text>Category: {item.category}</Text>
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
          <View>
            <TouchableOpacity onPress={handlePurchase}>
              <Text style={styles.purchaseInfo}>Purchase</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.removeButton}>
          <TouchableOpacity onPress={handleRemove}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SinglePackage;
