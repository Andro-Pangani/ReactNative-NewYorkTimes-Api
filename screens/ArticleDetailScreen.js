import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles/ArticleDetailsScreen.style';

const screen = Dimensions.get('screen');

export const ArticleDetailsScreen = ({ route }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (route.params.data) {
      let { title, abstract, media } = route.params?.data;
      let { caption, copyright } = media[0];
      let img = media[0]['media-metadata'].find((item) => item.width == 440);
      let { url } = img;

      setArticle({
        title,
        description: abstract,
        img: {
          url,
          caption,
          copyright,
        },
      });
    }
  }, [route.params.data]);

  if (!article) {
    return null;
  }
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.article_container}>
        <View style={styles.article_header}>
          <Text style={styles.article_title}>{article.title}</Text>
        </View>
        <View style={styles.article_body}>
          <View style={styles.image_container}>
            <Image
              source={{
                uri: article.img.url,
              }}
              style={{
                width: screen.width,
                height: screen.width / 1.501706484641638,
              }}
            />

            <Text style={styles.image_caption}>
              {article.img.caption}
              <Text style={styles.image_copyright}>
                {article.img.copyright}
              </Text>
            </Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text}>{article.description}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
