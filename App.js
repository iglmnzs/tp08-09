import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Menu from './src/components/Menu';
import BookListPage from './src/pages/BookListPage';
import UserLoginPage from './src/pages/UserLoginPage';
import UserCreatePage from './src/pages/UserCreatePage';
import PhotosPage from './src/pages/PhotosPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './src/pages/MainPage';
import CameraContainer from './src/containers/CameraContainer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='home' component={UserLoginPage} />
        <Stack.Screen name='UserCreatePage' component={UserCreatePage} />
        <Stack.Screen name='MainPage' component={MainPage} />
        {/* <Stack.Screen name='PhotosPage' component={PhotosPage} />
        <Stack.Screen name='BookListPage' component={BookListPage} />
        <Stack.Screen name='CameraContainer' component={CameraContainer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <ScrollView>
    //   <Menu />
    //   <UserLoginPage />
    //   {/* <PhotosPage /> */}
    //   {/* <UserCreatePage /> */}
    //   {/* <BookListPage /> */}
    // </ScrollView>
  );
}


