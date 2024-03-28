import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Menu from './src/components/Menu';
import BookListPage from './src/pages/BookListPage';


export default function App() {
  return (
    <ScrollView>
      <Menu />
      <BookListPage />
    </ScrollView>
  );
}


