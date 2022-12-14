import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from "./pages/Login";
import Home from "./pages/Home";
import HomeEditoras from './pages/HomeEditoras';
import { DataProvider } from'./context/DataContext';

const TabBottomNavigation = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <TabBottomNavigation.Navigator
     ScreenOptions={{
      headerShown:false,
      tabBarStyle:{backgroudColor:'whaite'},
      tabBarActiveTintColor:'blue',
    }}
    >
    <TabBottomNavigation.Screen name="HomeTabScreen" component={Home}
            options={{
              title:'Home',
              tabBarIcon: () => (<Ionicons name='home' color='#000' size={24} />)
            }}
            />
      <TabBottomNavigation.Screen name="HomeEditorasTabScreen" component={HomeEditoras}
              options={{
                title:'Home Editoras',
                tabBarIcon: () => (<Ionicons name='library' color='#000' size={24} />)
              }}
            />
    </TabBottomNavigation.Navigator>
  );
}
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="BottomNavigatorScreen" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;
