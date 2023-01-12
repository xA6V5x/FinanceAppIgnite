import React from "react"
import { View, ViewStyle, ScrollView, useColorScheme } from "react-native"
import { Text } from "../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "../theme"

export const SettingsScreen = () => {
  const { bottom } = useSafeAreaInsets()
  const theme = useColorScheme()

  return (
    <ScrollView style={[$scrollContainer, { backgroundColor: colors[theme].backgroundModal }]}>
      <View style={[$container, { paddingBottom: bottom + 90 }]}>
        <View style={$headerContainer}>
          <Text text="Settings" size="md" style={{ color: colors[theme].title }} weight="bold" />
        </View>
      </View>
    </ScrollView>
  )
}

const $scrollContainer: ViewStyle = {
  flex: 1,
  backgroundColor: "#FEFEFE",
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  backgroundColor: "#FEFEFE",
  paddingBottom: 150,
}

const $headerContainer: ViewStyle = {
  margin: 50,
  position: "relative",
  width: "100%",
  alignItems: "center",
}
