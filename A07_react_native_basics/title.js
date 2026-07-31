import { View, Text, StyleSheet } from 'react-native';
import { BOOK_TITLE, AUTHOR } from '../constants';

function Title() {
  return (
    <View>
      <Text style={styles.heading}>{`${BOOK_TITLE} by ${AUTHOR}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    color: '#b5651d',
    fontWeight: 'bold',
  },
});

export default Title;