import * as React from 'react';
import { observer } from "mobx-react-lite"
import { StyleSheet, ViewStyle, View, TextInput} from "react-native"
import { useNavigation, useTheme} from "@react-navigation/native"
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

const headstarterLogo = require("./headstarter.png")

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#3d7ea4",
    flex: 1,
  },
  full: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    // justifyContent: 'center',
  },
  input: {
    margin: 8,
    padding: 10,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  button: {
    margin: 8,
    backgroundColor: "#c77457",
  },
  text: {
    textAlign: 'center',
    margin: 8,
  },
  logo: {
    alignSelf: "center",
    marginVertical: 50,
    maxWidth: "100%",
    width: "100%",
    height: 100,
    borderRadius: 10
  }
})

const AuthContext = React.createContext<{
  signIn: () => void;
}>({
  signIn: () => {
    throw new Error(AUTH_CONTEXT_ERROR);
  },
});

export const LockScreen = observer(function LockScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate('tabs')

  const { signIn } = React.useContext(AuthContext);
  const { colors } = useTheme();

  return (
    <View style={styles.full}>
      <Screen style={styles.root} preset="scroll">
        <View style={styles.content}>
        <Image source={headstarterLogo} style={styles.logo} />
        <TextInput
          placeholder="Username"
          style={[
            styles.input,
            { backgroundColor: colors.card, color: colors.text },
          ]}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={[
            styles.input,
            { backgroundColor: colors.card, color: colors.text },
          ]}
        />
        <Button mode="contained" onPress={nextScreen} style={styles.button}>
          <Text> Sign In </Text>
        </Button>
      </View>
      </Screen>
    </View>
  )
})
