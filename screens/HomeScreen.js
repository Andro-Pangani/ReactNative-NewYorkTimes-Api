import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

//styles
import { styles } from './styles/HomeScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryItem } from '../components/CategoryItem';
import { VideoComponent } from '../components/VideoComponent';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';

export const HomeScreen = ({ route, navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let _article = route.params.articles;
    if (_article.length) {
      setData({
        articles: route.params.articles,
        sections: route.params.sections,
      });
    }
  }, [route.params.articles]);

  // Getting Video Ref from Video Section
  // Than passing it to # CATEGORY #
  // trough article section with *NAVIGATOR
  const [videoRef, setVideoRef] = useState(null);

  const getVideoRef = (video) => {
    console.log('####### Set video ref');
    setVideoRef(video);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.content_container}>
        <View style={styles.header_section}>
          <View style={styles.h1_title_container}>
            <LinearGradient
              colors={[
                'rgba(242,103,22,0)',
                'rgba(242,103,22,.8)',
                'rgba(38,38,38,.9)',
                'rgba(68,75,202,.3)',
                'rgba(38,38,38,.3)',
                'rgba(38,38,38,.4)',
              ]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0.9 }}
              locations={[0.09, 0.13, 0.1, 0.3, 0.7, 0.8]}
              style={{
                minWidth: '100%',
                alignItems: 'center',
              }}
            >
              <VideoComponent getVideoRef={getVideoRef} />
              <Text style={styles.h1_title_text}>New York Times</Text>
            </LinearGradient>
          </View>
        </View>

        <View style={styles.body_container}>
          <LinearGradient
            colors={[
              'rgba(38,38,38,0)',
              'rgba(38,38,38,.3)',
              'rgba(68,75,202,.3)',
            ]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            locations={[0.3, 0.5, 1]}
            style={styles.h2_title_container}
          >
            <Text style={styles.h2_title_text}>
              Most Viewed Articles Of A Day
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={[
              'rgba(38,38,38,0)',
              'rgba(38,38,38,0)',
              'rgba(68,75,202,0)',
              'rgba(38,38,38,0)',
            ]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            locations={[0, 0.1, 0.4, 1]}
            style={styles.body_gradient}
          >
            <ScrollView contentContainerstyle={styles.scrollView_styles}>
              <View style={styles.sections_list}>
                {data?.sections?.length
                  ? data.sections.map((section) => {
                      let temp = data?.articles.filter(
                        (item) => item.section === section
                      );
                      return (
                        <CategoryItem
                          key={section}
                          navigation={navigation}
                          title={section}
                          data={temp}
                          videoRef={videoRef}
                        />
                      );
                    })
                  : null}
              </View>
            </ScrollView>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.allRights}>
        <Text style={styles.allRights_text}>
          Copyright (c) 2021 The New York Times Company. All Rights Reserved.
        </Text>
      </View>
    </SafeAreaView>
  );
};
