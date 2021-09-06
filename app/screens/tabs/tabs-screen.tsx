import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet} from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { LockScreen, TwitterScreen, MapScreen, ProfileScreen } from "../../screens"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderBackButton, useHeaderHeight } from '@react-navigation/elements';

const styles = {
  root: {
    backgroundColor: color.palette.white,
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#f4e4de"
  }
}

const getTabBarIcon =
  (name: string) =>
  ({ color, size }: { color: string; size: number }) =>
    <MaterialCommunityIcons name={name} color={color} size={size} />;

const Tab = createBottomTabNavigator();

export const TabsScreen = observer(function TabsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="twitter"
        component={TwitterScreen}
        options={{
          headerShown: false,
          title: 'Updates',
          tabBarIcon: getTabBarIcon('twitter'),
        }}
      />
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          headerShown: false,
          title: 'Map',
          tabBarIcon: getTabBarIcon('map'),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: getTabBarIcon('account'),
        }}
      />
    </Tab.Navigator>
  )
})
