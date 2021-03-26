import { Video } from 'expo-av';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

export const VideoComponent = ({ getVideoRef }) => {
  const video = useRef(null);
  const [status, setStatus] = useState();

  useEffect(() => {
    //It Gives Video Reference to
    // <HomeScreen> =>
    // <CategoryItem> => (which passes it trough)
    // <Navigator> => route.props =>
    // <Category Screen>
    // and turns it off for performance reasons

    getVideoRef(video.current);
    video.current.playAsync();
    console.log('Video Use Effect');
  }, []);

  return (
    <View style={styles.video_container}>
      <Video
        ref={video}
        style={styles.video}
        isLooping
        source={require('../assets/videos/lightning.mp4')}
        resizeMode="stretch"
      />
    </View>
  );
};

let { width, height } = Dimensions.get('window');

let vidHeight = height * 0.5;

const styles = StyleSheet.create({
  video_container: {
    position: 'absolute',
    // minWidth: width,
    minHeight: height,
    top: 0,
    left: 0,
  },
  video: {
    position: 'relative',
    minWidth: vidHeight * 1.777777777777778,
    minHeight: vidHeight,
  },
});
