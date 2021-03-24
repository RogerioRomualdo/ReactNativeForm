import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 6,
    fontSize: 28,
  },
  input: {
    height: 50,
    maxWidth: 250,
    borderColor: 'transparent',
    borderBottomColor: '#a7a7a7',
    color: '#a7a7a7',
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 20,
  },
});

export default style;
