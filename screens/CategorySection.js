import { SafeAreaView, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles/CategorySection.style';
import { ArticleCard } from '../components/ArticleCard';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export const CategorySection = ({ route, navigation }) => {
  const [data, setData] = useState(null);

  const onPressHandler = (title, article) => {
    console.log(title, ' OnPress Handler');
    navigation.navigate('Article Details', {
      data: article,
      title: title,
    });
  };

  useEffect(() => {
    if (route.params.data?.length > 0) {
      setData(route.params.data);
      route.params?.videoRef.pauseAsync();
    }

    return () => {
      // Turns video on before Unmounting
      route.params?.videoRef.playAsync();
    };
  }, [route.params.data]);

  if (!data) return null;

  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        colors={['white', 'rgba(208,228,242,1)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <StatusBar style="light" />
        <View style={styles.body_container}>
          <FlatList
            data={data}
            contentContainerStyle={styles.categories_list}
            renderItem={({ item }) => {
              let img = null;
              if (item.media.length) {
                console.log(item.media);
                img = item?.media[0]['media-metadata'].find(
                  (item) => item.width == 210
                );
              }

              return (
                <TouchableOpacity
                  onPress={() => onPressHandler(item.published_date, item)}
                  style={styles.category_item}
                >
                  <ArticleCard text={item.title} url={img?.url} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.updated}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
