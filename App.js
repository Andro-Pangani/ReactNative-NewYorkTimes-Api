import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { MealsNavigator } from './navigation/MealsNavigator';

import { TimesApiFetch } from './lib/timesApiRequest';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Remote debugger']);

const loadFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [articles, setArticles] = useState({
    sections: [],
    results: [],
  });

  useEffect(() => {
    TimesApiFetch().then((data) => {
      setArticles({ sections: data.sections, results: data.results });
    });
  }, []);

  if (!fontsLoaded) {
    console.log('not loaded');
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => {
          console.log('loaded');
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  if (articles.results.length > 0) {
    return (
      <MealsNavigator
        articles={articles.results}
        sections={articles.sections}
      />
    );
  } else return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'open-sans',
  },
});
