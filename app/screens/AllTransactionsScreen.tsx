import React from "react"
import { View, ViewStyle, ScrollView, useColorScheme } from "react-native"
import { Text } from "../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "../theme"

export const AllTransactionsScreen = () => {
  const { bottom } = useSafeAreaInsets()
  const theme = useColorScheme()

  return (
    <ScrollView style={[$scrollContainer, { backgroundColor: colors[theme].backgroundCard }]}>
      <View style={[$container, { paddingBottom: bottom + 90 }]}>
        <View style={$headerContainer}>
          <Text
            text="Transactions"
            size="md"
            style={{ color: colors[theme].title }}
            weight="bold"
          />
        </View>
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
