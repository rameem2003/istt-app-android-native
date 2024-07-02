import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const StudentCardPlaceHolder = () => {
  return (
    <FlatList
      data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1]}
      renderItem={() => (
        <View style={styles.card}>
          <ShimmerPlaceholder style={styles.mainText}></ShimmerPlaceholder>
          <ShimmerPlaceholder style={styles.smalltext}></ShimmerPlaceholder>
        </View>
      )}></FlatList>
  );
};

export default StudentCardPlaceHolder;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    gap: 10,
  },

  mainText: {
    width: '80%',
    height: 20,
    backgroundColor: '#9e9e9e9e',
  },
  smalltext: {
    width: '60%',
    height: 20,
    backgroundColor: '#9e9e9e9e',
  },
});
