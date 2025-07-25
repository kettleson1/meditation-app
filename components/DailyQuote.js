import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeProvider';
import { COLORS } from '../constants/theme';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (response.ok) {
        const data = await response.json();
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
    <View style={[styles.container, {
      borderColor: isDarkMode ? COLORS.lightWhite : '#ccc',
      backgroundColor: isDarkMode ? COLORS.darkBackground : COLORS.lightWhite,
    }]}>
      {loading ? (
        <ActivityIndicator size="small" color={isDarkMode ? COLORS.lightWhite : '#0000ff'} />
      ) : (
        <>
          <Text style={[styles.quoteText, { color: isDarkMode ? COLORS.lightText : COLORS.darkText }]}>
            "{quote}"
          </Text>
          <Text style={[styles.authorText, { color: isDarkMode ? COLORS.gray2 : '#666' }]}>
            — {author}
          </Text>
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
    textAlign: 'center',
  },
});