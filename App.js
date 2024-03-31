import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Menu from './src/components/Menu';
import BookListPage from './src/pages/BookListPage';
import UserLoginPage from './src/pages/UserLoginPage';
import UserCreatePage from './src/pages/UserCreatePage';


export default function App() {
  return (
    <ScrollView>
      <Menu />
      {/* <UserLoginPage /> */}
      <UserCreatePage />
      {/* <BookListPage /> */}
    </ScrollView>
  );
}


