import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({title}) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#1E5391',
    padding: 20,
  },

  titleText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
