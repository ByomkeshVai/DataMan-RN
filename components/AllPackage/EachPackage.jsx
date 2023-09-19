import React, { useContext, useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import EachSingle from "./EachSingle";
import styles from "./EachPackage.style";

const EachPackage = ({ item, onRemove }) => {
  const [loading, setLoading] = useState(false);

  const handleRemove = async (category) => {
    const deleteService = item.filter(
      (packageItem) => packageItem !== category.category
    );

    onRemove(deleteService);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const incrementPrice = () => {
    if (currentIndex < item.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const decrementPrice = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <ScrollView>
      <View>
        <EachSingle
          item={item[currentIndex]}
          incrementPrice={incrementPrice}
          decrementPrice={decrementPrice}
          handleRemove={handleRemove}
          loading={loading}
        />
      </View>
    </ScrollView>
  );
};

export default EachPackage;

// <View style={styles.removeButton}>
//   {loading ? (
//     <Text>Loading...</Text> // Show loading animation
//   ) : (
//     {
//       /* <TouchableOpacity onPress={handleRemove}>
//             <Text style={styles.purchaseInfo}>Remove</Text>
//           </TouchableOpacity> */
//     }
//   )}
// </View>;
