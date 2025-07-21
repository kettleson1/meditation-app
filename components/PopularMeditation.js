import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { COLORS, SHADOWS } from "../constants";

const popularMeditations = [
  {
    id: "1",
    title: "Mindful Breathing",
    duration: "10 mins",
    image: require("../assets/meditation1.png"),
    target: "Calm & Relaxation",
  },
  {
    id: "2",
    title: "Stress Relief",
    duration: "15 mins",
    image: require("../assets/meditation2.png"),
    target: "Stress Reduction",
  },
  {
    id: "3",
    title: "Morning Focus",
    duration: "8 mins",
    image: require("../assets/meditation3.png"),
    target: "Focus & Energy",
  },
];

const PopularMeditation = () => {
  const router = useRouter();

  const handleNavigate = (id) => {
    router.push(`/meditation-details/${id}`);
  };

  const renderMeditationCard = ({ item }) => (
    <TouchableOpacity
      key={`popular-${item.id}`}
      style={styles.card}
      onPress={() => handleNavigate(item.id)}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.detail}>{item.target}</Text>
        <Text style={styles.detail}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Meditations</Text>
      <FlatList
        data={popularMeditations}
        horizontal
        keyExtractor={(item) => `popular-${item.id}`}
        renderItem={renderMeditationCard}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: 15,
    width: 160,
    ...SHADOWS.medium,
  },
  image: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  detail: {
    marginTop: 4,
    color: COLORS.gray,
    fontSize: 14,
  },
});

export default PopularMeditation;