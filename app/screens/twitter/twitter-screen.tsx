import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, ViewStyle, StyleSheet, Keyboard } from "react-native"
import { Screen, Text, TextField, Button} from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: color.palette.offWhite

  },
  button: {
    margin: 30,
    backgroundColor: color.palette.black,
    borderWidth: 1,
    height:40,

  },


  });

export const TwitterScreen = function TwitterScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [text, onChangeText] = React.useState("#theheadstarter");


  return (
    <Screen style={styles.input} preset="scroll">
      {/* <Text preset="header" text="twitter API stuff goes in this screen" /> */}
      <TextInput
        onChangeText = {onChangeText}
        value = {text}
        onSubmitEditing={Keyboard.dismiss}
      />

      <Button mode = "contianed" style={styles.button}>
          <Text> Find Tweets </Text>
      </Button>


    </Screen>
  )
}
