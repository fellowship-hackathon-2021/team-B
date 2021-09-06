import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { LockScreen, TwitterScreen, MapScreen, ProfileScreen } from "../../screens"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const Tab = createBottomTabNavigator();

export const TabsScreen = observer(function TabsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Tab.Navigator>
      <Tab.Screen name="twitter" component={TwitterScreen} />
      <Tab.Screen name="MapScreen" component={TwitterScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
})
