import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieCard = ({ movie }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}` }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginBottom: 10, alignItems: 'center' },
  image: { width: 50, height: 75, marginRight: 10 },
  title: { fontSize: 16, flexShrink: 1 },
});

export default MovieCard;
