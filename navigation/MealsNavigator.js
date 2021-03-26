import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { CategorySection } from '../screens/CategorySection';
import { AccelerometerScreen } from '../screens/Accelerometer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ArticleDetailsScreen } from '../screens/ArticleDetailScreen';

export const MealsNavigator = ({ articles, sections }) => {
  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ articles: articles, sections: sections }}
            options={{
              headerTitle: 'New York Times',

              headerStyle: {
                backgroundColor: 'black',
                height: 0,
              },
              headerTitleStyle: {
                color: 'rgba(133,133,133,.7)',
                fontFamily: 'open-sans',
                fontSize: 0,
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Categories"
            options={({ route }) => ({
              title: route.params.title,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 16,
                fontFamily: 'open-sans',
              },
              headerStyle: {
                backgroundColor: 'rgba(109,130,53,1)',
                elevation: 0,
              },
            })}
            component={CategorySection}
          />

          <Stack.Screen
            name="Article Details"
            options={({ route }) => ({
              title: route.params.title,
              headerTitleAlign: 'center',
              headerTintColor: 'rgba(38,38,38,1)',
              headerTitleStyle: {
                fontFamily: 'open-sans',
                // fontStyle: 'italic',
                color: 'rgba(38,38,38,.8)',
                fontSize: 15,
              },
              headerStyle: {
                backgroundColor: 'rgba(67,69,140,1)',
                borderWidth: 0,
                elevation: 0,
              },
            })}
            component={ArticleDetailsScreen}
          />
          <Stack.Screen name="Accelerometer" component={AccelerometerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
