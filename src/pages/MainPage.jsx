import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import GalleryContainer from "../containers/GalleryContainer";
import CameraContainer from "../containers/CameraContainer";
import BookListPage from "./BookListPage";
import Menu from "../components/Menu";

const Tabs = createBottomTabNavigator();

export default function PhotosPage() {
  return (
    <>
      <Menu />
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen name="BookListPage" component={BookListPage} />
        <Tabs.Screen name="galeria" component={GalleryContainer} />
        <Tabs.Screen name="camera" component={CameraContainer} />
      </Tabs.Navigator>
    </>
  );
}
