import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profile.style";

export default function Profile() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            }}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.welcomeTxt}>Habib Rahman</Text>
          <View style={styles.package}>
            <Text style={styles.title}>Active:</Text>
            <Text style={styles.subtitle}>DemoMod</Text>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText}>Show Package</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText}>Buy Credit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
