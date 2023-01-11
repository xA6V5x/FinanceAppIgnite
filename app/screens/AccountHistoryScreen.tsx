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
import { ListAccounts } from "../components/ListAccounts"
import { colors } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const AccountHistoryScreen = () => {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const { bottom } = useSafeAreaInsets()

  return (
    <ScrollView>
      <View style={[$container, { paddingBottom: bottom + 90 }]}>
        <View style={$headerContainer}>
          <Text
            text="Account History"
            size="md"
            style={{ color: colors.palette.neutral100 }}
            weight="bold"
          />
          <TouchableOpacity activeOpacity={0.8} style={$settingsButton}>
            <Image source={require("../../assets/icons/settingsLight.png")} style={$settingsIcon} />
          </TouchableOpacity>
        </View>
        <ListAccounts />
        <View style={[$transactionsContainer, $bottomContainerInsets]}>
          <Text text="Recent transactions" size="md" weight="bold" />
        </View>
      </View>
    </ScrollView>
  )
}

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

const $transactionsContainer: ViewStyle = {
  width: "95%",
  margin: 11,
  padding: 22,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 30,
  justifyContent: "space-around",
}

const $settingsButton: ViewStyle = { position: "absolute", right: 0, marginRight: 15 }

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
