import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, SIZES } from "../constants/theme";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Welcome from "../components/Welcome";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";
import { AntDesign } from "@expo/vector-icons"; // for FAB icon
import { useRouter } from "expo-router";

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    try {
      const user = await AsyncStorage.getItem("userDetails");
      if (user) {
        setUserDetails(JSON.parse(user));
      } else {
        // Redirect if not logged in
        Alert.alert("Unauthorized", "Please log in first.");
        router.replace("/login");
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenHeaderBtn />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
          testID="screensDisplay"
        >
          <Welcome userDetails={userDetails} />
          <PopularMeditation />
          <DailyMeditation />
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
          backgroundColor: COLORS.primary,
          borderRadius: 30,
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
        }}
        onPress={() => Alert.alert("FAB Pressed", "Add new meditation")}
      >
        <AntDesign name="plus" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;