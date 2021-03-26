import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  content_container: {
    position: 'relative',
    marginTop: height / 20,
  },

  header_section: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  h1_title_container: {
    paddingHorizontal: 10,
  },
  h1_title_text: {
    fontFamily: 'open-sans',
    fontSize: 25,
    color: 'rgba(178,178,178,.8)',
    textShadowRadius: 70,
  },

  h2_title_container: {
    marginTop: 30,
    maxWidth: '100%',
    minWidth: '100%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    // backgroundColor: 'rgba(30,33,89,1)',
  },
  h2_title_text: {
    maxWidth: '40%',
    fontSize: 11,
    paddingVertical: 5,
    paddingLeft: 5,
    fontFamily: 'open-sans',
    textAlign: 'left',
    color: 'rgba(211,211,211,.9)',
  },
  body_container: {
    width: '55%',
    height: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height / 40,
  },
  scrollView_styles: {},
  sections_list: {
    flexDirection: 'row',
    maxWidth: '100%',
    maxHeight: '100%',
    flexWrap: 'wrap',
  },
  body_gradient: {
    minWidth: '100%',
    maxWidth: '100%',
    marginTop: height / 25,
    height: '100%',
    flexWrap: 'wrap',
    borderRadius: 3,
  },

  button_section: {
    marginBottom: 20,
  },
  allRights: {
    width: '100%',
    backgroundColor: 'black',
  },
  allRights_text: {
    color: 'gray',
    fontFamily: 'open-sans',
    fontSize: 10,
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
});
