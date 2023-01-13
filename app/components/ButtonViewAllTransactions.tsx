import React from "react"
import { ViewStyle, TouchableOpacity } from "react-native"
import { Text } from "./Text"
import { colors } from "../theme"
import { useNavigation } from "@react-navigation/native"

export const ButtonViewAllTransactions = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={$center} onPress={() => navigation.navigate("AllTransactions")}>
      <Text
        text="View All Transactions"
        style={{ color: colors.palette.purple }}
        weight="semiBold"
      />
    </TouchableOpacity>
  )
}

const $center: ViewStyle = { alignItems: "center" }
