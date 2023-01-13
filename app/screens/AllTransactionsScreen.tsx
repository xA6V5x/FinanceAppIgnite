import React from "react"
import { View, ViewStyle, ScrollView, useColorScheme } from "react-native"
import { Text } from "../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "../theme"
import { CardTransaction } from "../components/CardTransaction"

import Transactions from "../infoJson/recentTransactions.js"

export const AllTransactionsScreen = () => {
  const { bottom } = useSafeAreaInsets()
  const theme = useColorScheme()

  return (
    <ScrollView style={[$scrollContainer, { backgroundColor: colors[theme].backgroundCard }]}>
      <View style={[$container, { paddingBottom: bottom }]}>
        <View style={$headerContainer}>
          <Text
            text="Transactions"
            size="md"
            style={{ color: colors[theme].title }}
            weight="bold"
          />
        </View>
        <View style={$allTransactions}>
          {Transactions.map((data, index) => {
            return (
              <CardTransaction
                key={index}
                index={index}
                manyTransaction={Transactions.length}
                type={data.type}
                icon={data.icon}
                title={data.title}
                date={data.date}
                amount={data.amount}
                currency={data.currency}
              />
            )
          })}
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
}

const $headerContainer: ViewStyle = {
  margin: 50,
  marginBottom: 30,
  position: "relative",
  width: "100%",
  alignItems: "center",
}

const $allTransactions: ViewStyle = { width: "90%" }
