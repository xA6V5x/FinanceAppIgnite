import React from "react"
import { Image, View, ViewStyle, TouchableOpacity, useColorScheme } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text } from "../components"
import { colors } from "../theme"
// import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
// import { useSafeAreaInsets } from "react-native-safe-area-context"
import { CardTransaction } from "./CardTransaction"

import Transactions from "../infoJson/recentTransactions.js"

export const RecentTransactions = () => {
  //   const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  //   const { bottom } = useSafeAreaInsets()
  const navigation = useNavigation()
  const theme = useColorScheme()

  return (
    <View style={[$transactionsContainer, { backgroundColor: colors[theme].backgroundCard }]}>
      <TouchableOpacity activeOpacity={0.8} style={$filterButton}>
        <Image source={require("../../assets/icons/filter.png")} />
      </TouchableOpacity>
      <Text
        text="Recent transactions"
        size="md"
        weight="bold"
        style={{ color: colors[theme].title }}
      />
      {Transactions.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Transaction")}
          >
            <CardTransaction
              index={index}
              manyTransaction={Transactions.length}
              type={data.type}
              icon={data.icon}
              title={data.title}
              date={data.date}
              amount={data.amount}
              currency={data.currency}
            />
          </TouchableOpacity>
        )
      })}
      <TouchableOpacity style={$center} onPress={() => navigation.navigate("AllTransactions")}>
        <Text
          text="View All Transactions"
          style={{ color: colors.palette.purple }}
          weight="semiBold"
        />
      </TouchableOpacity>
    </View>
  )
}

const $transactionsContainer: ViewStyle = {
  width: "92%",
  margin: 11,
  padding: 22,
  borderRadius: 30,
  justifyContent: "space-around",
}

const $filterButton: ViewStyle = {
  position: "absolute",
  margin: 18,
  right: 0,
  width: 30,
  height: 30,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#523CF8",
  borderRadius: 50,
  zIndex: 100,
}

const $center: ViewStyle = { alignItems: "center" }
