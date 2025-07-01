import React from "react";
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
  },
  {
    id: "2",
    title: "Stress Relief",
    duration: "15 mins",
    image: require("../assets/meditation2.png"),
  },
  {
    id: "3",
    title: "Morning Focus",
    duration: "8 mins",
    image: require("../assets/meditation3.png"),
  },
];

const PopularMeditation = ({ onCardPress }) => {
  const renderMeditationCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onCardPress?.(item)}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Meditations</Text>
      <FlatList
        data={popularMeditations}
        horizontal
        keyExtractor={(item) => item.id}
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
  duration: {
    marginTop: 5,
    color: COLORS.gray,
  },
});

export default PopularMeditation;