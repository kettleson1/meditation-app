import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONT, SIZES } from "../constants";

const Welcome = () => {
  const [userName, setUserName] = useState("Friend");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userData = await AsyncStorage.getItem("userDetails");
        if (userData) {
          const parsed = JSON.parse(userData);
          if (parsed.userName) {
            setUserName(parsed.userName);
          }
        }
      } catch (error) {
        console.error("Error reading userDetails from AsyncStorage:", error);
      }
    };
    fetchUserName();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello {userName}</Text>
      <Text style={styles.message}>Welcome back to your meditation app.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    marginHorizontal: SIZES.medium,
  },
  greeting: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  message: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginTop: 5,
  },
});

export default Welcome;