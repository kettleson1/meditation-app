import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLORS, SIZES } from "../constants";
import Welcome from "../components/Welcome";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";
import DailyQuote from "../components/DailyQuote";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    try {
      const user = await AsyncStorage.getItem("userDetails");
      setUserDetails(user ? JSON.parse(user) : null);
    } catch (error) {
      console.error("Error loading user details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: SIZES.medium }}>
          <ScreenHeaderBtn />
          <Welcome userDetails={userDetails} />
          <DailyQuote />
          <PopularMeditation />
          <DailyMeditation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;