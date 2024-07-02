import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from './Title';

const StudentDetails = ({route, navigation}) => {
  const {data} = route.params;

  // console.log(data);
  return (
    <View style={{paddingBottom: '20%'}}>
      <Title title={data.studentNameEnglish} />
      <ScrollView>
        <View style={styles.containt}>
          <Image
            style={{
              borderRadius: 8,
              marginHorizontal: 'auto',
              marginBottom: 20,
            }}
            source={{uri: data.studentImage}}
            height={250}
            width={250}
          />
          <Text
            style={{
              ...styles.name,
              fontSize: 30,
              textTransform: 'capitalize',
              color: 'red',
            }}>
            {data.department} Department
          </Text>
          <Text style={styles.name}>Board Roll :{data.diplomaBoardRoll}</Text>
          <Text style={styles.name}>
            Registration No :{data.diplomaBoardReg}
          </Text>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 10,
              marginBottom: 20,
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

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 10,
              marginBottom: 20,
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
                {data.sscResult}
              </Text>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
                SSC GPA
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
                {data.sscGroup}
              </Text>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 20,
                }}>
                SSC Group
              </Text>
            </View>
          </View>

          <Text
            style={{
              ...styles.name,
              fontSize: 20,
            }}>
            Basic Info
          </Text>

          <Text style={{...styles.name, textAlign: 'left', color: 'black'}}>
            Father : {data.fathersName}
          </Text>
          <Text style={{...styles.name, textAlign: 'left', color: 'black'}}>
            Mother : {data.mothersName}
          </Text>
          <Text style={{...styles.name, textAlign: 'left', color: 'black'}}>
            Date of Birth : {data.dob}
          </Text>
          <Text style={{...styles.name, textAlign: 'left', color: 'black'}}>
            Email : {data.email}
          </Text>
        </View>
      </ScrollView>
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
