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
import { COLORS, icons, SIZES } from "../constants";
import MedAppLogo from '../assets/MedAppLogo.png';

import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";
import Welcome from "../components/Welcome";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await AsyncStorage.getItem("loggedInUser");
      if (user) {
        const parsed = JSON.parse(user);
        setUserDetails(parsed);
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
                style={{ width: 30, height: 30, marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }} testID="screensDisplay">
          <Welcome userDetails={userDetails} />
          <PopularMeditation />
          <DailyMeditation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;