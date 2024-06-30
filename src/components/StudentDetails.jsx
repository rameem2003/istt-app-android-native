import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from './Title';

const StudentDetails = ({route, navigation}) => {
  const {data} = route.params;

  console.log(data);
  return (
    <View>
      <Title title={data.studentNameEnglish} />
      <View style={styles.containt}>
        <Image
          style={{borderRadius: 8, marginHorizontal: 'auto', marginBottom: 20}}
          source={{uri: data.studentImage}}
          height={250}
          width={250}
        />
        <Text style={styles.name}>Board Roll :{data.diplomaBoardRoll}</Text>
        <Text style={styles.name}>Registration No :{data.diplomaBoardReg}</Text>

        <View
          style={{
            marginTop: 20,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
          }}>
          <View
            style={{
              width: '50%',
              height: 100,
              padding: 10,
              borderRadius: 8,
              backgroundColor: '#1E5391',
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 40}}>
              {data.bloodGroup}
            </Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
              Blood
            </Text>
          </View>
          <View
            style={{
              //   flex: 1,
              width: '50%',
              height: 100,
              padding: 10,
              borderRadius: 8,
              backgroundColor: '#1E5391',
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 40,
                textTransform: 'capitalize',
              }}>
              {data.gender}
            </Text>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
              }}>
              Gender
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StudentDetails;

const styles = StyleSheet.create({
  containt: {
    padding: 20,
  },

  flex: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#1E5391',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    marginHorizontal: 'auto',
  },

  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1E5391',
    textAlign: 'center',
  },
  desc: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
});
