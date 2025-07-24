import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        console.log('🌍 Fetching countries...');
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital');
        if (!response.ok) {
          throw new Error('Response not OK');
        }
        const data = await response.json();
        console.log('✅ Fetched countries:', data);
        const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sorted);
        setIsLoading(false);
      } catch (error) {
        console.error('❌ Failed to fetch countries –', error.message);
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🌎 Select a Country</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#666" />
      ) : (
        <>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(itemValue) => setSelectedCountry(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Choose a country..." value="" />
            {countries.map((country, index) => (
              <Picker.Item
                key={index}
                label={country.name.common}
                value={country.name.common}
              />
            ))}
          </Picker>

          {selectedCountry ? (
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>You selected: {selectedCountry}</Text>
              <Text style={styles.infoText}>
                Capital:{' '}
                {
                  countries.find((c) => c.name.common === selectedCountry)?.capital?.[0] ||
                  'N/A'
                }
              </Text>
            </View>
          ) : null}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
    height: 50,
  },
  infoBox: {
    marginTop: 20,
    backgroundColor: '#e6f0ff',
    padding: 10,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 16,
  },
});

export default CountryList;