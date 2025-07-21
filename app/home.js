import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Welcome from "../components/Welcome";
import DailyMeditation from "../components/DailyMeditation";
import PopularMeditation from "../components/PopularMeditation";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import { COLORS, SIZES } from "../constants/theme";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    try {
      const user = await AsyncStorage.getItem("userDetails");
      if (user) {
        const parsedUser = JSON.parse(user);
        console.log("user", parsedUser);
        setUserDetails(parsedUser);
      }
    } catch (error) {
      console.error("Failed to load user details:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenHeaderBtn />
        {userDetails && (
          <View style={{ padding: SIZES.medium }}>
            <Text style={{ fontSize: SIZES.large, color: COLORS.primary, fontFamily: "DMBold" }}>
            </Text>
          </View>
        )}
        <Welcome />
        <PopularMeditation />
        <DailyMeditation />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;