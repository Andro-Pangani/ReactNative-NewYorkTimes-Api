import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,

    paddingTop: 15,
    backgroundColor: 'rgba(191,197,217,1)',
  },

  article_container: {},

  article_header: {
    width: '100%',
    backgroundColor: 'rgba(191,197,217,0)',
    paddingHorizontal: 5,
    paddingBottom: 5,
    alignItems: 'center',
  },

  article_title: {
    fontFamily: 'open-sans',
    fontSize: 18,
    width: '90%',
    color: 'rgba(0,0,0,.7)',
  },

  image_container: {
    alignItems: 'center',
  },
  image_copyright: {
    fontSize: 10,
    color: 'rgba(0,0,0,.5)',
  },
  image_caption: {
    color: 'rgba(0,0,0,.9)',
    width: '90%',
    fontSize: 10,
    fontFamily: 'open-sans',
  },
  description_container: {
    alignSelf: 'center',
    width: '90%',
    marginTop: 5,
  },
  description_text: {
    fontFamily: 'open-sans',
  },
});
