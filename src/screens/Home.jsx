import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigate = useNavigation();
  return (
    <ScrollView>
      <View>
        <Text>Home</Text>

        <Button
          onPress={() => navigate.navigate('STUDENT')}
          title="Go to students"
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
