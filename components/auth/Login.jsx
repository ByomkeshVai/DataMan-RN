import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Login() {
  return (
    <View>
      <Image
        source={require("../../assets/login/login.jpg")}
        style={{ width: 100, height: 100 }}
      />
      <Text style={styles.welcomeText}>Welcome to DataMan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
  },
});
