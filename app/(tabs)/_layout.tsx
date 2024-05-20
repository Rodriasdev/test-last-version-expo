import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    screenOptions={{
      
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false
        }}
        // options={{
        //   title: 'Home',
        //   tabBarIcon: ({ color, focused }) => (
        //     <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        //   ),
        // }}
      />
      <Tabs.Screen
        name="gameInfo"
        // options={{
        //   title: 'Explore',
        //   tabBarIcon: ({ color, focused }) => (
        //     <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
        //   ),
        // }}
      />
    </Tabs>
  );
}
