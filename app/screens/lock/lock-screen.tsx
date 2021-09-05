import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, SafeAreaView} from "react-native"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components"
import { color, spacing, typography } from "../../theme"

const styles = StyleSheet.create({
  root: {
    backgroundColor: color.palette.black,
    flex: 1,
  },
  full: {
    flex: 1,
  },
  submitContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: color.palette.deepPurple,
    alignItems: 'center',
  },
  submitText: {
    color: color.palette.white,
    fontFamily: typography.primary,
    fontWeight: "bold",
    fontSize: 13,
    letterSpacing: 2,
  },
  footerContainer: {
    backgroundColor: "#ffffff"
  },
  footerContent: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  }
})

export const LockScreen = observer(function LockScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("linkedin")
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={styles.full}>
      <Screen style={styles.root} preset="scroll">
        <Text preset="header" text="this actually the lock screen shh" />
      </Screen>
      <SafeAreaView style={styles.footerContainer}>
        <View style={styles.footerContent}>
          <Button
            testID="next-screen-button"
            style={styles.submitContainer}
            textStyle={styles.submitText}
            tx="lockScreen.submit"
            onPress={nextScreen}
          />
        </View>
      </SafeAreaView>
    </View>
  )
})
