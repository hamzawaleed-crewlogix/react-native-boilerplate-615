import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({label}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: 'red',
  },
  label: {
    color: 'white',
  },
});

export default Button;
