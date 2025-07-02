import { Image, TouchableOpacity, StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { useRouter } from "expo-router";
import MedAppLogo from "../assets/MedAppLogo.png"; // Import your custom logo

const ScreenHeaderBtn = ({ detailPage, handleShare }) => {
  const router = useRouter();

  return (
    <View style={styles.btn}>
      {/* App Logo */}
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => router.push("/home")}
      >
        <Image source={MedAppLogo} style={styles.logoImage} />
      </TouchableOpacity>

      {/* Right Side Buttons */}
      {detailPage ? (
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={handleShare}
        >
          <Image
            source={require("../assets/icons/share.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => router.push("/settings")}
        >
          <Image
            source={require("../assets/icons/settings.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
  },
  logoContainer: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  logoImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});

export default ScreenHeaderBtn;