import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const DailyQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (response.ok) {
        const data = await response.json();
        setQuote(data.quote);
        setAuthor(data.author);
      } else {
        console.error("Error fetching quote:", response.status);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.quoteText}>"{quote}"</Text>
          <Text style={styles.authorText}>- {author}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
  },
  quoteText: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 8,
    color: "#333",
  },
  authorText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#555",
  },
});

export default DailyQuote;