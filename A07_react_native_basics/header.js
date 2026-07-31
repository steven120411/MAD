import { View, Text } from 'react-native';

function Header() {
  const isWeekend = true;

  return (
    <View>
      <Text>{isWeekend ? 'Happy cooking this weekend!' : 'Happy cooking today!'}</Text>
    </View>
  );
}

export default Header;