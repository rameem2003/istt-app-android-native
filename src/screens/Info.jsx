import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../components/Title';

const Info = () => {
  return (
    <View>
      <Title title="About App" />
      <View
        style={{
          //   flexDirection: 'row',
          alignItems: 'center',
          padding: 2,
          gap: 2,
          width: '100%',
        }}>
        <Image
          style={styles.Image}
          source={require('../assets/images/logo.png')}
        />

        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            Institute of Science Trade & Technology
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            Diploma batch 2019 / 20
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: 'black',
          marginTop: 40,
          marginBottom: 20,
          textAlign: 'center',
        }}>
        App Developer
      </Text>

      <View
        style={{
          //   flexDirection: 'row',
          alignItems: 'center',
          padding: 2,
          gap: 10,
          width: '100%',
        }}>
        <Image
          style={{width: 200, height: 200}}
          source={require('../assets/images/rameem.jpg')}
        />

        <View>
          <Text
            style={{
              fontSize: 23,
              fontWeight: '800',
              color: 'black',
              textAlign: 'center',
            }}>
            Mahmood Hassan Rameem
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            BSc. in CSE Northen University
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            Ex Student Diploma Batch 2019 / 20
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
            }}>
            Mail: rameem2019@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  Image: {
    height: 80,
    width: 80,
    // marginHorizontal: 'auto',
  },
});
