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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Please enter email and password.");
      return;
    }

    const storedDetails = await AsyncStorage.getItem("userDetails");
    const parsedDetails = JSON.parse(storedDetails);

    if (
      parsedDetails &&
      parsedDetails.email === email &&
      parsedDetails.password === password
    ) {
      await AsyncStorage.setItem("loggedInUser", JSON.stringify(parsedDetails));
      router.push("/home"); // replace with your actual home screen
    } else {
      Alert.alert("Login Failed", "Incorrect email or password.");
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
          <Image source={MedAppLogo} style={{ width: 50, height: 50, alignSelf: 'center', marginBottom: 20 }}/>
        </View>

        {/* Form */}
        <View style={{ marginTop: 30 }}>
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
        <TouchableOpacity style={buttonStyle} onPress={handleLogin}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={{ color: "blue", marginLeft: 5 }}>Sign Up</Text>
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

export default Login;