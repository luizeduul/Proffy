import React from 'react';
import { View, Image, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';


const TeacherList = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default TeacherList;