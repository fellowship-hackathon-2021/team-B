import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View } from "react-native"
import { Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import { color } from "../../theme"
import { LockScreen, FellowScreen, MapScreen, ProfileScreen } from "../../screens"


const styles = StyleSheet.create({
  root: {
    backgroundColor: color.palette.black,
    flex: 1,
  },
  full: {
    flex: 1,
  },
})

const getTabBarIcon =
  (name: string) =>
  ({ color, size }: { color: string; size: number }) =>
    <MaterialCommunityIcons name={name} color={color} size={size} />;

type BottomTabParams = {
  TabStack: NavigatorScreenParams<SimpleStackParams>;
  TabAlbums: undefined;
  TabContacts: undefined;
  TabChat: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabParams>();

const Tab = createBottomTabNavigator();

export const LinkedinScreen = observer(function LinkedinScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <View style={styles.full}>
      <Screen style={styles.root} preset="scroll">
        <Text preset="header" text="peep these updates" />
      </Screen>
      <Tab.Navigator>
        <Tab.Screen name="Lock" component={LockScreen}
          options={{
            title: 'LinkedIn',
            tabBarIcon: getTabBarIcon('linkedin'),
          }}
        />
        <Tab.Screen name="Fellow" component={FellowScreen}
          options={{
            title: 'Fellow',
            tabBarIcon: getTabBarIcon('account-group'),
          }}
        />
        <Tab.Screen name="Map" component={MapScreen}
          options={{
            title: 'Map',
            tabBarIcon: getTabBarIcon('map'),
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: getTabBarIcon('account'),
          }}
        />
      </Tab.Navigator>
    </View>
  )
})
