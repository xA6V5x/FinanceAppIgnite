import React from "react"
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text } from "../components"
import { ListAccounts } from "../components/ListAccounts"
import { colors } from "../theme"
// import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { RecentTransactions } from "../components/RecentTransactions"

export const AccountHistoryScreen = () => {
  // const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const { bottom } = useSafeAreaInsets()
  const navigation = useNavigation()
  const theme = useColorScheme()

  return (
    <ScrollView style={[$scrollContainer, { backgroundColor: "#523CF8" }]}>
      <View style={[$container, { paddingBottom: bottom + 90 }]}>
        <View style={$headerContainer}>
          <Text
            text="Account History"
            size="md"
            style={{ color: colors.palette.neutral100 }}
            weight="bold"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            activeOpacity={0.8}
            style={$settingsButton}
          >
            <Image source={require("../../assets/icons/settingsLight.png")} style={$settingsIcon} />
          </TouchableOpacity>
        </View>
        <ListAccounts />
        <RecentTransactions />
      </View>
    </ScrollView>
  )
}

const $scrollContainer: ViewStyle = {
  flex: 1,
}
const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  paddingBottom: 150,
}

const $headerContainer: ViewStyle = {
  margin: 50,
  position: "relative",
  width: "100%",
  alignItems: "center",
}

const $settingsButton: ViewStyle = { position: "absolute", right: 0, marginRight: 15 }

const $settingsIcon: ImageStyle = { width: 28, height: 28 }
