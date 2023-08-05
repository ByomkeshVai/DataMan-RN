import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { SIZES, COLORS } from "../constants";

function Search() {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.searchContainer}>
          <View style={styles.SearchWrapper}>
            <TextInput
              style={styles.SearchInput}
              value=""
              onPressIn={() => {}}
              placeholder="What are you looking for"
            />
          </View>
          <TouchableOpacity style={styles.SearchBtn}>
            <TouchableOpacity>
              <Feather name="search" size={24} style={styles.SearchIcon} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Search;
