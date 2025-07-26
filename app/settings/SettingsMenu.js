import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, SHADOWS, SIZES } from "../../constants/theme";
import { useTheme } from "../../context/ThemeProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsMenu = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const settingsOptions = [
    {
      id: "1",
      name: "User Information",
      icon: "user",
      path: "/settings/UserInfo",
    },
    {
      id: "2",
      name: "Account Settings",
      icon: "cog",
      path: "/settings/AccountSettings",
    },
    {
      id: "3",
      name: "Notifications",
      icon: "bell",
      path: "/settings/Notifications",
    },
    {
      id: "4",
      name: "About",
      icon: "info-circle",
      path: "/settings/About",
    },
  ];

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
      <ScrollView>
        <View style={{ padding: SIZES.medium }}>
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

          {/* Logout Button */}
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

export default SettingsMenu;