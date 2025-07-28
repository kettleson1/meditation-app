import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Switch,
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { COLORS, SHADOWS, SIZES } from "../../constants";
import { useTheme } from "../../context/ThemeProvider";

const NotificationSettings = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    loadNotificationSetting();
    requestPermissions();
  }, []);

  const loadNotificationSetting = async () => {
    const saved = await AsyncStorage.getItem("notificationsEnabled");
    if (saved !== null) {
      setNotificationsEnabled(saved === "true");
    }
  };

  const saveNotificationSetting = async (value) => {
    setNotificationsEnabled(value);
    await AsyncStorage.setItem("notificationsEnabled", value.toString());
  };

  const requestPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== "granted") {
        Alert.alert("Permission denied", "Enable notifications from settings.");
      }
    }
  };

  const scheduleNotification = async () => {
    if (!notificationsEnabled) {
      Alert.alert("Notifications are disabled.");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Test Reminder",
        body: "This is a test notification!",
      },
      trigger: { seconds: 5 },
    });

    Alert.alert("Notification scheduled for 5 seconds from now.");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite,
      }}
    >
      <Stack.Screen options={{ headerTitle: "Notifications" }} />
      <ScrollView contentContainerStyle={{ padding: SIZES.medium }}>

        {/* Enable Notifications Toggle Block */}
        <View
          style={{
            justifyContent: "space-between",
            padding: SIZES.medium,
            borderRadius: SIZES.small,
            backgroundColor: isDarkMode ? "#111" : "#eee",
            ...SHADOWS.medium,
            shadowColor: isDarkMode ? COLORS.white : COLORS.darkText,
            marginBottom: SIZES.medium,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: isDarkMode ? COLORS.lightText : COLORS.darkText,
              fontSize: SIZES.medium,
              fontFamily: "DMBold",
            }}
          >
            Enable Notifications
          </Text>

          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            value={notificationsEnabled}
            onValueChange={saveNotificationSetting}
          />
        </View>

        {/* Test Notification Button */}
        <TouchableOpacity
          onPress={scheduleNotification}
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.medium,
            borderRadius: SIZES.medium,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.lightWhite,
              fontWeight: "bold",
              fontSize: SIZES.medium,
              fontFamily: "DMBold",
            }}
          >
            Test Notification
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationSettings;