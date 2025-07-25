import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import { COLORS, SIZES, FONT, SHADOWS } from "../constants";
import { useTheme } from "../context/ThemeProvider";

const Settings = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const [userDetails, setUserDetails] = useState(null);

  const settingsOptions = [
    { title: "Theme Change", route: "/settings/ThemeChange" },
    { title: "My Favorites", route: "/favorites" },
    { title: "Daily Reminders", route: "/settings/reminders" }, // Placeholder route
  ];

  useEffect(() => {
    const loadUserDetails = async () => {
      const user = await AsyncStorage.getItem("userDetails");
      setUserDetails(user ? JSON.parse(user) : null);
    };
    loadUserDetails();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userDetails");
    router.push("/login");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite,
      }}
    >
      <ScreenHeaderBtn />
      <ScrollView>
        <View style={styles.container}>
          {userDetails && (
            <Text style={[styles.greeting, { color: isDarkMode ? COLORS.lightText : COLORS.darkText }]}>
              Hello {userDetails.userName}
            </Text>
          )}

          {settingsOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                {
                  backgroundColor: isDarkMode ? COLORS.lightWhite : COLORS.darkBackground,
                },
              ]}
              onPress={() => router.push(item.route)}
            >
              <Text style={[styles.optionText, { color: isDarkMode ? COLORS.darkText : COLORS.lightText }]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            onPress={handleLogout}
            style={[styles.logoutBtn, SHADOWS.medium]}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    gap: 16,
  },
  greeting: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    marginBottom: 16,
  },
  option: {
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    ...SHADOWS.small,
  },
  optionText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
  logoutBtn: {
    marginTop: 24,
    padding: SIZES.medium,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    alignItems: "center",
  },
});

export default Settings;