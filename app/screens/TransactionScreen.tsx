import React from "react"
import { View, ViewStyle, ScrollView } from "react-native"
import { Text } from "../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "../theme"

export const TransactionScreen = () => {
  const { bottom } = useSafeAreaInsets()

  return (
    <ScrollView style={$scrollContainer}>
      <View style={[$container, { paddingBottom: bottom + 90 }]}>
        <View style={$headerContainer}>
          <Text
            text="Transaction Details"
            size="md"
            style={{ color: colors.palette.neutral900 }}
            weight="bold"
          />
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
