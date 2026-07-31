import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Title from './components/Title';
import RecipeList from './components/recipes/RecipeList';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.page}>
      <Header />
      <Title />
      <RecipeList />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fffaf0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
    paddingTop: 48,
  },
});
