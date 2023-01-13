import React from "react"
import {
  Image,
  View,
  ViewStyle,
  TouchableOpacity,
  ImageStyle,
  useColorScheme,
  TextStyle,
} from "react-native"
import { Text } from "./Text"
import { colors } from "../theme"

export const CardAccount = () => {
  const theme = useColorScheme()
  return (
    <View style={[$card, { backgroundColor: colors[theme].backgroundCard }]}>
      <TouchableOpacity activeOpacity={0.8} style={$moreButton}>
        <Image source={require("../../assets/carousel/more.png")} style={$settingsIcon} />
      </TouchableOpacity>
      <Text text="Current Account" size="xl" weight="bold" style={{ color: colors[theme].title }} />
      <Text
        text="1234-4567-3543-3543"
        size="xs"
        weight="bold"
        style={{ color: colors[theme].words }}
      />
      <View style={$currency}>
        <View style={$EUR}>
          <Text
            text="EUR"
            size="xs"
            weight="semiBold"
            style={{ color: colors.palette.neutral100 }}
          />
        </View>
        <View style={$USD}>
          <Text text="USD" size="xs" weight="bold" style={{ color: colors[theme].words }} />
        </View>
        <View style={$GBP}>
          <Text text="GBP" size="xs" weight="bold" style={{ color: colors[theme].words }} />
        </View>
      </View>
      <Text text="76.451,00" size="xxl" weight="bold" style={{ color: colors[theme].title }} />
      <Text text="Current balance" size="md" style={{ color: colors[theme].title }} />
    </View>
  )
}

const $card: ViewStyle = {
  width: "85%",
  borderRadius: 30,
  padding: 15,
}

const $moreButton: ViewStyle = {
  position: "absolute",
  margin: 18,
  right: 0,
  width: 40,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F76654",
  borderRadius: 50,
  zIndex: 100,
}

const $settingsIcon: ImageStyle = { width: 25, height: 25 }

const $currency: ViewStyle = {
  flexDirection: "row",
}

const $EUR: TextStyle = {
  marginVertical: 16,
  backgroundColor: "#523CF8",
  paddingVertical: 3,
  paddingHorizontal: 10,
  borderRadius: 10,
}

const $USD: TextStyle = {
  marginVertical: 16,
  marginHorizontal: 5,
  paddingHorizontal: 16,
  paddingVertical: 3,
  borderRadius: 10,
}

const $GBP: TextStyle = {
  marginVertical: 16,
  borderRadius: 10,
  paddingVertical: 3,
}
