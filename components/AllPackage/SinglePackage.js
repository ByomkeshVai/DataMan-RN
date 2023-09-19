import React, { useContext, useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import styles from "./../subscription/SingleSub.style";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EachPackage from "./EachPackage";

const SinglePackage = ({ item, handleRemoveItem }) => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  return (
    <View>
      <EachPackage item={item} onRemove={handleRemoveItem} />
    </View>
  );
};

export default SinglePackage;
