import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CategoryItem = ({ title, data, navigation, videoRef }) => {
  const handlePress = () => {
    navigation.navigate('Categories', {
      data: data,
      title: title,
      videoRef: videoRef,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container_view}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container_view: {
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderRadius: 3,
    borderColor: 'rgba(191,197,217,.1)',
    borderWidth: 1,
  },
  title: {
    color: 'rgba(112,108,140,1)',
    fontFamily: 'open-sans',
    fontSize: 16,
    padding: 5,
    paddingLeft: 0,
    textAlign: 'left',
    textDecorationColor: 'red',
    textShadowColor: 'black',
    textShadowRadius: 2,
  },
});
