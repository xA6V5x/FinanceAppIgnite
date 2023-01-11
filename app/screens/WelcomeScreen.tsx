import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  Image,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { Text } from "../components"
import { CardsAccounts } from "../components/CardsAccounts"
import { colors } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const { bottom } = useSafeAreaInsets()

  return (
    <ScrollView>
      <View style={[$container, { paddingBottom: bottom + 90 }]}>
        <View style={$headerContainer}>
          <Text text="Account History" size="md" style={{ color: "#ffff" }} weight="bold" />
          <TouchableOpacity activeOpacity={0.8} style={$settingsButton}>
            <Image source={require("../../assets/icons/settingsLight.png")} style={$settingsIcon} />
          </TouchableOpacity>
        </View>
        <CardsAccounts />
        <View style={$cardContainer}>
          <Text text="Current Account" size="xl" weight="bold" />
        </View>
        <View style={[$transactionsContainer, $bottomContainerInsets]}>
          <Text text="Recent transactions" size="md" weight="bold" />
        </View>
      </View>
    </ScrollView>
  )
})

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  backgroundColor: "#523CF8",
  paddingBottom: 150,
}

const $headerContainer: ViewStyle = {
  margin: 50,
  position: "relative",
  width: "100%",
  alignItems: "center",
}

const $cardContainer: ViewStyle = {
  width: "80%",
  borderRadius: 30,
  padding: 10,
  backgroundColor: "#ffff",
}

const $transactionsContainer: ViewStyle = {
  width: "95%",
  margin: 10,
  padding: 10,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 30,
  justifyContent: "space-around",
}

const $settingsButton = { position: "absolute", right: 0, marginRight: 15 }

const $settingsIcon: ImageStyle = { width: 28, height: 28 }

// const $welcomeFace: ImageStyle = {
//   height: 169,
//   width: 269,
//   position: "absolute",
//   bottom: -47,
//   right: -80,
//   transform: [{ scaleX: isRTL ? -1 : 1 }],
// }

// const $welcomeHeading: TextStyle = {
//   marginBottom: spacing.medium,
// }
