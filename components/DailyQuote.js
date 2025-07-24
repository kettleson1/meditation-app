import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true); // Start in loading state

  console.log("✅ DailyQuote component rendered");

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (response.ok) {
        const data = await response.json();
        console.log("📦 Fetched Quote:", data);
        setQuote(data.quote);
        setAuthor(data.author);
      } else {
        console.error("❌ Error fetching quote: HTTP", response.status);
      }
    } catch (error) {
      console.error("❌ Error fetching quote:", error);
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
          <Text style={styles.authorText}>— {author}</Text>
        </>
      )}
    </View>
  );
};

export default DailyQuote;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 5,
    textAlign: 'center',
  },
  authorText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
  },
});