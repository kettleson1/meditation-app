import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons } from "../constants";
import MedAppLogo from '../assets/MedAppLogo.png';

const Home = () => {
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await AsyncStorage.getItem("loggedInUser");
      if (user) {
        const parsed = JSON.parse(user);
        setUserName(parsed.username || "Meditator");
      }
    };
    fetchUser();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push("/settings")}>
              <Image
                source={MedAppLogo}
                resizeMode="contain"
                style={{ width: 24, height: 24, marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView style={{ padding: 20 }}>
        {/* Greeting */}
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          Hello {userName}! 👋
        </Text>
        <Text style={{ fontSize: 18, color: "#555" }}>
          Find your perfect meditation.
        </Text>

        {/* TODO: Add Popular Meditations & Featured Section next */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
