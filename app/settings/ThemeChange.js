import React from "react";
import { Text, SafeAreaView, Switch, View, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { COLORS, SHADOWS, SIZES } from "../../constants/theme";
import { useTheme } from "../../context/ThemeProvider";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const ThemeChange = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite,
      }}
    >
      <ScreenHeaderBtn />

      <View
        style={{
          justifyContent: "space-between",
          padding: SIZES.medium,
          borderRadius: SIZES.small,
          backgroundColor: isDarkMode ? "#111111" : "#EEEEEE",
          ...SHADOWS.medium,
          shadowColor: isDarkMode ? COLORS.white : COLORS.darkText,
          marginVertical: SIZES.medium,
          marginHorizontal: SIZES.medium,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: isDarkMode ? COLORS.lightText : COLORS.darkText,
            fontSize: SIZES.medium,
            fontFamily: "DMBold",
            marginHorizontal: SIZES.medium,
            textShadowColor: isDarkMode ? "#444" : "transparent",
            textShadowOffset: { width: 0.5, height: 0.5 },
            textShadowRadius: 1,
          }}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Text>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={isDarkMode}
          onValueChange={toggleTheme}
        />
      </View>
    </SafeAreaView>
  );
};

export default ThemeChange;