import React from "react"
import { View, ViewStyle, ScrollView } from "react-native"
import { Text } from "../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "../theme"

export const CardsScreen = () => {
  const { bottom } = useSafeAreaInsets()

  return (
    <ScrollView style={$scrollContainer}>
      <View style={[$container, { paddingBottom: bottom + 90 }]}>
        <View style={$headerContainer}>
          <Text text="Cards" size="md" style={{ color: colors.palette.neutral100 }} weight="bold" />
        </View>
      </View>
    </ScrollView>
  )
}

const $scrollContainer: ViewStyle = {
  flex: 1,
  backgroundColor: "#523CF8",
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