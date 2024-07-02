import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import StudentCard from './StudentCard';
import Title from './Title';
import StudentCardPlaceHolder from './StudentCardPlaceHolder';

const StudentsList = () => {
  const navigate = useNavigation();
  const api = 'https://istt-students-api.vercel.app/api/v1/students';
  const [allStudent, setAllstudent] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(api).then(data => {
        setLoading(false);
        setAllstudent(data.data);
      });
    };

    fetchData();
  }, []);

  const sortedList = [...allStudent].sort(
    (a, b) => a.diplomaBoardRoll - b.diplomaBoardRoll,
  );

  return (
    <View style={{paddingBottom: '20%'}}>
      <Title title="Students" />

      {loading ? (
        <StudentCardPlaceHolder />
      ) : (
        <ScrollView style={{padding: 10}}>
          {sortedList.map((student, i) => (
            <StudentCard key={i} data={student} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default StudentsList;

const styles = StyleSheet.create({});
