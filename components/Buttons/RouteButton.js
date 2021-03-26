import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const RouteButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...style, ...styles.button }}>
        <Text style={styles.button_text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // width: '50%',
    padding: 5,
    alignItems: 'center',
    borderColor: 'rgba(77,77,77,1)',
    borderWidth: 1,
    borderRadius: 3,
  },
  button_text: {
    color: 'rgba(115,153,115,1)',
    fontFamily: 'open-sans',
  },
});
