import { RectButton } from 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StatusBar } from 'react-native';
import { useGalleryInit } from 'reanimated-gallery';

import Standalone from './Standalone/Standalone';

const Stack = createStackNavigator();

export function List({ items }: { items: string[] }) {
  useFocusEffect(() => {
    StatusBar.setHidden(false);
  });

  const nav = useNavigation();

  return (
    <>
      {items.map((title) => (
        <RectButton
          onPress={() => nav.navigate(title)}
          style={{
            height: 64,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            backgroundColor: 'white',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 18 }}>{title}</Text>
          <Text style={{ fontSize: 24, color: '#4D4D4D' }}>➡</Text>
        </RectButton>
      ))}
    </>
  );
}

function Home() {
  return <List items={['Standalone']} />;
}

export default function App() {
  useGalleryInit();
  return (
    <>
      <StatusBar translucent showHideTransition="fade" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            gestureEnabled: false,
          }}
          headerMode="screen"
        >
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen
            options={{ headerShown: false }}
            component={Standalone}
            name="Standalone"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
