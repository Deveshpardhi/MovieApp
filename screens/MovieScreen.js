import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { fetchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const MovieScreen = ({ route, navigation }) => {
  const { query } = route.params;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(query).then(setMovies);
  }, [query]);

  const handlePress = (movie) => {
    navigation.navigate('Details', { movie });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <MovieCard movie={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default MovieScreen;
