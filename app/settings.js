import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, SIZES, SHADOWS } from "../constants/theme";
import { useTheme } from "../context/ThemeProvider";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";

const Settings = () => {
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const settingsOptions = [
    {
      id: "1",
      name: "Settings",
      icon: "cog",
      path: "/settings/ThemeChange",
    },
    {
      id: "2",
      name: "My Favorites",
      icon: "heart",
      path: "/settings/Favourites",
    },
    {
      id: "3",
      name: "Daily Reminders",
      icon: "bell",
      path: "/settings/DailyReminders",
    },
  ];

  const loadUserDetails = async () => {
    const user = await AsyncStorage.getItem("userDetails");
    if (user) {
      setUserDetails(JSON.parse(user));
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userDetails");
    router.push("/login");
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite,
      }}
    >
      <ScreenHeaderBtn />
      <ScrollView>
        <View style={{ padding: SIZES.medium }}>
          {userDetails?.userName && (
            <Text
              style={{
                fontSize: SIZES.large,
                fontFamily: "DMBold",
                marginBottom: SIZES.medium,
                color: isDarkMode ? COLORS.lightText : COLORS.darkText,
              }}
            >
              Hello, {userDetails.userName}
            </Text>
          )}

          {settingsOptions.map((item) => (
            <View
              key={item.id}
              style={{
                backgroundColor: isDarkMode ? "#111" : "#eee",
                borderRadius: SIZES.small,
                padding: SIZES.medium,
                marginBottom: SIZES.medium,
                flexDirection: "row",
                alignItems: "center",
                ...SHADOWS.medium,
                shadowColor: isDarkMode ? COLORS.white : COLORS.darkText,
              }}
            >
              <TouchableOpacity
                onPress={() => router.push(item.path)}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <FontAwesome
                  name={item.icon}
                  size={22}
                  color={isDarkMode ? COLORS.lightText : COLORS.primary}
                />
                <Text
                  style={{
                    marginLeft: 12,
                    fontSize: SIZES.medium,
                    fontFamily: "DMBold",
                    color: isDarkMode ? COLORS.lightText : COLORS.darkText,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}

          {/* Logout */}
          <View
            style={{
              backgroundColor: isDarkMode ? "#111" : "#eee",
              borderRadius: SIZES.small,
              padding: SIZES.medium,
              marginTop: SIZES.medium,
              flexDirection: "row",
              alignItems: "center",
              ...SHADOWS.medium,
              shadowColor: isDarkMode ? COLORS.white : COLORS.darkText,
            }}
          >
            <TouchableOpacity
              onPress={handleLogout}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <FontAwesome name="sign-out" size={22} color="red" />
              <Text
                style={{
                  marginLeft: 12,
                  fontSize: SIZES.medium,
                  fontFamily: "DMBold",
                  color: "red",
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;