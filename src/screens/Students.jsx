import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Students = () => {
  const api = 'https://istt-students-api.vercel.app/api/v1/students';
  const [allStudent, setAllstudent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(api).then(data => setAllstudent(data.data));
    };

    fetchData();
  }, []);

  const sortedList = [...allStudent].sort(
    (a, b) => a.diplomaBoardRoll - b.diplomaBoardRoll,
  );

  return (
    <View style={{paddingBottom: '20%'}}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Students</Text>
      </View>

      <ScrollView>
        {sortedList.map((student, i) => (
          <Text key={i}>{student.studentNameEnglish}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Students;

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
