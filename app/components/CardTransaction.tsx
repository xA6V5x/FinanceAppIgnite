import React from "react"
import { Image, View, ViewStyle, useColorScheme } from "react-native"
import { Text } from "./Text"
import { colors } from "../theme"

type CardTransactionProps = {
  manyTransaction: number
  index: number
  type: boolean
  icon: any
  title: string
  date: string
  amount: string | number
  currency: string
}

export const CardTransaction = ({
  index,
  manyTransaction,
  type,
  icon,
  title,
  date,
  amount,
  currency,
}: CardTransactionProps) => {
  const theme = useColorScheme()
  return (
    <View style={$transactionButton}>
      <View style={$iconContainer}>
        <Image source={icon} />
      </View>
      <View
        style={[
          $infoTransactionContainer,
          {
            borderBottomColor:
              index !== manyTransaction - 1
                ? colors[theme].separationBar
                : colors[theme].separationBarNone,
          },
        ]}
      >
        <View>
          <Text text={title} size="xs" weight="bold" style={{ color: colors[theme].title }} />
          <Text text={date} size="xxs" style={{ color: colors[theme].date }} />
        </View>
        <View style={$dateAndCurrency}>
          <Text
            text={type ? `+${amount}` : `-${amount}`}
            size="xs"
            weight="bold"
            style={{ color: type ? "#523CF8" : "#F76654" }}
          />
          <Text text={currency} size="xxs" style={{ color: colors[theme].date }} />
        </View>
      </View>
    </View>
  )
}

const $transactionButton: ViewStyle = { flexDirection: "row", marginTop: 15 }

const $iconContainer: ViewStyle = {
  marginRight: 15,
  width: 35,
  height: 35,
  backgroundColor: "#F76654",
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
}

const $infoTransactionContainer: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  paddingBottom: 15,
  borderBottomWidth: 1,
}

const $dateAndCurrency: ViewStyle = { flex: 1, alignItems: "flex-end" }
