import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Title from '../components/Title';

const Home = () => {
  const navigate = useNavigation();
  return (
    <ScrollView>
      <View>
        <Title title="ISTT CMT 2019 - 2020" />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 250,
              height: 250,
              marginHorizontal: 'auto',
            }}
            source={require('../assets/images/logo.png')}
          />

          <Button
            onPress={() => navigate.navigate('STUDENT')}
            title="Go to student"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
