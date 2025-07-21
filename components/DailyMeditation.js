import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { COLORS, SHADOWS } from "../constants";
import useFetch from "../hook/useFetch";

const DailyMeditation = ({ meditations }) => {
  const router = useRouter();

  const { isLoading, error, bestMeditations } = useFetch("search", {
    query: "",
    num_pages: "1",
  });

  const handleNavigate = (id) => {
    router.push(`/meditation-details/${id}`);
  };

  const data = meditations || bestMeditations;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Meditation</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {data?.slice(0, 3).map((item) => (
            <TouchableOpacity
              key={`daily-${item.id}`}
              style={styles.card}
              onPress={() => handleNavigate(item.id)}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.detail}>{item.target}</Text>
                <Text style={styles.detail}>{item.duration}</Text>
                <Text style={styles.description}>
                  {item.description ?? "No description available."}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
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
    marginBottom: 20,
    overflow: "hidden",
    ...SHADOWS.medium,
  },
  image: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primary,
  },
  detail: {
    marginTop: 4,
    color: COLORS.gray,
    fontSize: 14,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: COLORS.gray,
    textAlign: "justify",
  },
});

export default DailyMeditation;