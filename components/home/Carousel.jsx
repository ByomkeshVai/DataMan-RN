import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants/theme";

export default function Carousel() {
  const slides = [
    "https://images.yourstory.com/cs/1/44cbaf50-c56c-11e9-ba8e-9fb92a50b638/On_Demand_Services1566641112589.png",
    "https://appther.com/blog/wp-content/uploads/2019/11/imgpsh_fullsize_anim-2-2-1024x554.png",
    "https://www.odtap.com/wp-content/uploads/2019/03/On-Demand-Business-Success.jpg",
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
