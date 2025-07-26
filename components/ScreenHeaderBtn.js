import { Image, TouchableOpacity, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import MedAppLogo from "../assets/MedAppLogo.png";
import { COLORS, SIZES } from "../constants/theme";

const ScreenHeaderBtn = ({ detailPage, handleShare }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* App Logo (left side) */}
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => router.push("/home")}
      >
        <Image source={MedAppLogo} style={styles.logoImage} />
      </TouchableOpacity>

      {/* Right side buttons */}
      <View style={styles.actions}>
        {detailPage ? (
          <TouchableOpacity style={styles.iconBtn} onPress={handleShare}>
            <Image
              source={require("../assets/icons/share.png")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        ) : (
          <>
          <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.push("/login")}
            >
              <Image
                source={require("../assets/icons/login.png")} // Make sure this icon exists
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.push("/settings")}
            >
              <Image
                source={require("../assets/icons/settings.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>

          
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  actions: {
    flexDirection: "row",
  },
  iconBtn: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  iconImage: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
});

export default ScreenHeaderBtn;