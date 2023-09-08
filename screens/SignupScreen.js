import React, { useContext, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import FormInput from "../components/auth/FormInput";
import FormButton from "../components/auth/FormButton";
import SocialButton from "../components/auth/SocialButton";
import { AuthContext } from "../components/providers/AuthProvider";
import { Controller, useForm } from "react-hook-form";

const SignupScreen = ({ navigation }) => {
  const { handleSubmit, control, watch } = useForm();
  const { createUser, updateUserProfile, loading, setLoading } =
    useContext(AuthContext);
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    function generateRandomID() {
      const min = 10000; // Minimum 5-digit number (10000)
      const max = 99999; // Maximum 5-digit number (99999)
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // const generateRandomID = () => {
    //   const randomNumber = Math.floor(Math.random() * 99999) + 10000; // Generate a random number between 10000 and 99999
    //   return `se${randomNumber}`; // Add the 'se' prefix to the random number
    // };

    const randomID = generateRandomID();

    const photoUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&usqp=CAU";

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, photoUrl);
      const saveUser = {
        userID: randomID,
        name: data.name,
        email: data.email,
        phone: data.phone,
        photo: photoUrl,
        role: "customer",
      };
      console.log(saveUser);
      fetch(`http://192.168.0.100:5000/customer/${loggedUser.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Alert.alert("Signup Successful");
          }
        });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <Controller
        control={control}
        name="name"
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormInput
            labelValue={value}
            onChangeText={onChange}
            placeholderText="Your Name"
            iconType="user"
            keyboardType="name"
            autoCapitalize="none"
            autoCorrect={false}
            errorMessage={error && "Name is required"}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormInput
            labelValue={value}
            onChangeText={onChange}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            errorMessage={error && "Email is required"}
          />
        )}
      />

      <Controller
        control={control}
        name="phone"
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormInput
            labelValue={value}
            onChangeText={onChange}
            placeholderText="Phone Number"
            iconType="phone"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            errorMessage={error && "Phone is required"}
          />
        )}
      />

      <Controller
        control={control}
        name="location"
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormInput
            labelValue={value}
            onChangeText={onChange}
            placeholderText="Your Address"
            iconType="map"
            autoCapitalize="none"
            autoCorrect={false}
            errorMessage={error && "Location is required"}
          />
        )}
      />

      {/* Password */}
      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormInput
            labelValue={value}
            onChangeText={onChange}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry
            errorMessage={error && "Password is required"}
          />
        )}
      />

      {/* Confirm Password */}
      <Controller
        control={control}
        name="confirmPassword"
        defaultValue=""
        rules={{
          validate: (value) =>
            value === password.current || "Passwords do not match",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormInput
            labelValue={value}
            onChangeText={onChange}
            placeholderText="Confirm Password"
            iconType="lock"
            secureTextEntry
            errorMessage={error && error.message}
          />
        )}
      />

      <FormButton buttonTitle="Sign Up" onPress={handleSubmit(onSubmit)} />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{" "}
        </Text>
        <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
          Privacy Policy
        </Text>
      </View>

      {Platform.OS === "android" ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />

          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    // fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    // fontFamily: "Lato-Regular",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    // fontFamily: "Lato-Regular",
    color: "grey",
  },
});
