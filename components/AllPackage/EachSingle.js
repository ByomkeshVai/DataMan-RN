import React, { useContext, useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import styles from "./../subscription/SingleSub.style";

const EachSingle = ({ item, incrementPrice, decrementPrice, handleRemove }) => {
  return (
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
        <TouchableOpacity onPress={() => handleRemove(item.category)}>
          <Text style={styles.purchaseInfo}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EachSingle;
