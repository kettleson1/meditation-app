import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Alert,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, SHADOWS } from "../constants";
import MedAppLogo from "../assets/MedAppLogo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Handle login by validating credentials stored in AsyncStorage
  const handleLogin = async () => {
    if (!email || !password) {
      Platform.OS === "web"
        ? window.alert("Please enter email and password.")
        : Alert.alert("Validation Error", "Please enter email and password.");
      return;
    }

    try {
      const storedDetails = await AsyncStorage.getItem("userDetails");
      const parsedDetails = JSON.parse(storedDetails);

      if (
        parsedDetails &&
        parsedDetails.email === email &&
        parsedDetails.password === password
      ) {
        await AsyncStorage.setItem(
          "loggedInUser",
          JSON.stringify(parsedDetails)
        );
        router.push("/home");
      } else {
        Alert.alert("Login Failed", "Incorrect email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Something went wrong during login.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <></>,
          headerTitle: "",
        }}
      />
      <View style={{ padding: 20 }}>
        {/* Logo */}
        <View
          style={{
            padding: 20,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#f0f0f0",
            borderRadius: 50,
            height: 90,
            ...SHADOWS.medium,
            shadowColor: COLORS.white,
          }}
        >
          <Image
            source={MedAppLogo}
            style={{ width: 50, height: 50, alignSelf: "center" }}
          />
        </View>

        {/* Login Form */}
        <View style={{ marginTop: 30 }}>
          <TextInput
            style={inputStyle}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={inputStyle}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={buttonStyle} onPress={handleLogin}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Navigation */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={{ color: "blue", marginLeft: 5 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Input field styling
const inputStyle = {
  borderColor: "#ccc",
  borderWidth: 1,
  padding: 10,
  borderRadius: 5,
  marginBottom: 15,
};

// Button styling
const buttonStyle = {
  backgroundColor: COLORS.primary,
  padding: 15,
  borderRadius: 5,
  alignItems: "center",
  marginTop: 10,
};

export default Login;