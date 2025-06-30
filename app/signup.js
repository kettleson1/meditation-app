import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Alert,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS } from "../constants";
import MedAppLogo from '../assets/MedAppLogo.png';
import { Platform } from "react-native";


const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!userName || !email || !password) {
      Platform.OS === 'web'
        ? window.alert("Please fill in all fields.")
        : Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }
    const userDetails = { userName, email, password, token: "sample-token" };
    await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
    console.log("User signed up:", userDetails);
    router.push("/login");
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
          <Image source={MedAppLogo} style={{ width: 50, height: 50 }} />
        </View>

        {/* Form */}
        <View style={{ marginTop: 30 }}>
          <TextInput
            style={inputStyle}
            value={userName}
            onChangeText={setUserName}
            placeholder="User Name"
          />
          <TextInput
            style={inputStyle}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <TextInput
            style={inputStyle}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={buttonStyle} onPress={handleRegister}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={{ color: "blue", marginLeft: 5 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const inputStyle = {
  borderColor: "#ccc",
  borderWidth: 1,
  padding: 10,
  borderRadius: 5,
  marginBottom: 15,
};

const buttonStyle = {
  backgroundColor: COLORS.primary,
  padding: 15,
  borderRadius: 5,
  alignItems: "center",
  marginTop: 10,
};

export default SignUp;

