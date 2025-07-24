import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

const getThemeStyles = (isDark) => ({
  userName: {
    color: isDark ? COLORS.lightWhite : COLORS.darkText,
  },
  welcomeMessage: {
    color: isDark ? COLORS.lightText : COLORS.darkText,
  },
});

const Welcome = ({ userDetails, isDarkMode }) => {
  const themeStyles = getThemeStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <Text style={[styles.userName, themeStyles.userName]}>
        Hello {userDetails?.userName || "Guest"}!
      </Text>
      <Text style={[styles.welcomeMessage, themeStyles.welcomeMessage]}>
        Find your perfect meditation
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    marginTop: 2,
  },
});

export default Welcome;