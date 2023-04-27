import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/screens/main/home';
import Schedule from './components/screens/schedule/schedule';
import { NavigationContainer } from '@react-navigation/native';
import Catalog from './components/screens/catalog/catalog';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from './constant/index'
import Favourite from './components/screens/favourite/favourite';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ 
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.secondary },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: COLORS.primary
       }}>
          <Tab.Screen name="Home" 
            component={Home}
            options={{ 
              tabBarIcon: ({ color, size }) => {
               return <Ionicons name='home-outline' color={color} size={size}/>
              }
             }} 
          />
          <Tab.Screen name="Schedule" 
            component={Schedule} 
            options={{ 
              tabBarIcon: ({ color, size }) => {
               return <Ionicons name='today-outline' color={color} size={size}/>
              }
             }} 
             />
          <Tab.Screen name="Catalog"
            component={Catalog} 
            options={{ 
              tabBarIcon: ({ color, size }) => {
               return <Ionicons name='reader-outline' color={color} size={size}/>
              }
             }} 
             />
          <Tab.Screen name="Favouite"
            component={Favourite} 
            options={{ 
              tabBarBadge: 3,
              tabBarBadgeStyle: { backgroundColor: 'white'},
              tabBarIcon: ({ color, size }) => {
               return <Ionicons name='heart-outline' color={color} size={size}/>
              }
             }} 
             />
      </Tab.Navigator>
      <StatusBar style='auto' backgroundColor="transparent" translucent={true}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
