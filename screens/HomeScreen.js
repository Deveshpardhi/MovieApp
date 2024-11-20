import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';


const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigation.navigate('Movies', { query });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Database</Text>
      <SearchBar query={query} onQueryChange={setQuery} onSearch={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default HomeScreen;
