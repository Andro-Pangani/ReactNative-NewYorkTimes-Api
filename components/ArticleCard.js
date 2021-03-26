import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const ArticleCard = ({ url, text, style }) => {
  useEffect(() => {});

  return (
    <View style={{ ...styles.article_section, ...style }}>
      <View style={styles.imageContainer}>
        {url ? (
          <Image
            source={{
              uri: url,
            }}
            style={{ width: 210, height: 140 }}
          />
        ) : null}
      </View>
      <View style={styles.article_text_container}>
        <ScrollView
          // horizontal={false}
          contentContainerStyle={styles.article_text_scroll}
        >
          <Text style={styles.article_text}>{text}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  article_section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(77,77,77,.7)',
    borderWidth: 1,
    backgroundColor: 'rgba(13,13,13,.5)',
    maxWidth: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },

  imageContainer: {},

  article_text_container: {
    maxWidth: width - 210 - 40,
    // minHeight: '100%',
  },

  article_text_scroll: {
    minWidth: '100%',
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  article_text: {
    color: 'rgba(191,189,176,1)',
    fontFamily: 'open-sans',
    fontSize: 12,
    padding: 10,
    textAlign: 'center',
  },
});
