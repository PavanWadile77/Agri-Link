import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './src/store/store';
import { login as loginAction } from './src/store/store';
import { Colors } from './src/theme/theme';
import { Home, Search, Store, User } from 'lucide-react-native';

// Import Screens
import AuthScreen from './src/screens/AuthScreen';
import FarmerDashboard from './src/screens/FarmerDashboard';
import ShopDashboard from './src/screens/ShopDashboard';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import PriceCheckerScreen from './src/screens/PriceCheckerScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let IconComponent;
          if (route.name === 'Dashboard') IconComponent = Home;
          else if (route.name === 'Market') IconComponent = Search;
          else if (route.name === 'Shop') IconComponent = Store;
          else if (route.name === 'Profile') IconComponent = User;

          return <IconComponent color={color} size={size} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: 'rgba(255,255,255,0.1)',
          height: 80,
          paddingBottom: 20,
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={FarmerDashboard} />
      <Tab.Screen name="Market" component={PriceCheckerScreen} /> 
      <Tab.Screen name="Shop" component={ShopDashboard} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

function MainNavigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Auth">
            {(props) => <AuthScreen {...props} onLogin={() => dispatch(loginAction({ name: 'Ramesh' }))} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
