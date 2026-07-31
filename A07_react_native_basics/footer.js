import { View, Text } from 'react-native';

function Footer() {
  const year = 2026;

  return (
    <View>
      <Text>© {year} My Recipe Book</Text>
    </View>
  );
}

export default Footer;