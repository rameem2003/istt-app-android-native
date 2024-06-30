import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const StudentCard = ({data}) => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigate.navigate('DETAILS', {data})}>
      {/* <Image source={{uri: data.studentImage}} height={200} width={'auto'} /> */}
      <Text style={styles.name}>{data.studentNameEnglish}</Text>
      <View style={styles.flex}>
        <Text style={styles.desc}>Roll : {data.diplomaBoardRoll}</Text>
        <Text style={styles.desc}>Blood : {data.bloodGroup}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
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
  },
  desc: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
});
