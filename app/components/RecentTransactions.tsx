import React from "react"
import { Image, View, ViewStyle, TouchableOpacity, TextStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text } from "../components"
import { colors } from "../theme"
// import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
// import { useSafeAreaInsets } from "react-native-safe-area-context"
import Transactions from "../infoJson/recentTransactions.js"

export const RecentTransactions = () => {
  //   const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  //   const { bottom } = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <View style={$transactionsContainer}>
      <TouchableOpacity activeOpacity={0.8} style={$filterButton}>
        <Image source={require("../../assets/icons/filter.png")} />
      </TouchableOpacity>
      <Text text="Recent transactions" size="md" weight="bold" />
      {Transactions.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Transaction")}
            style={$transactionButton}
          >
            <View style={$iconContainer}>
              <Image source={data.icon} />
            </View>
            <View
              style={[
                $infoTransactionContainer,
                { borderBottomColor: index != Transactions.length - 1 ? "#DCDCDC" : "#ffffff" },
              ]}
            >
              <View>
                <Text text={data.title} size="xs" weight="bold" />
                <Text text={data.date} size="xxs" style={$colorGray} />
              </View>
              <View style={$dateAndCurrency}>
                <Text
                  text={data.type ? `+${data.amount}` : `-${data.amount}`}
                  size="xs"
                  weight="bold"
                  style={{ color: data.type ? "#523CF8" : "#F76654" }}
                />
                <Text text={data.currency} size="xxs" style={$colorGray} />
              </View>
            </View>
          </TouchableOpacity>
        )
      })}
      <TouchableOpacity style={$center} onPress={() => navigation.navigate("AllTransactions")}>
        <Text text="View All Transactions" style={$colorPurple} weight="semiBold" />
      </TouchableOpacity>
    </View>
  )
}

const $transactionsContainer: ViewStyle = {
  width: "92%",
  margin: 11,
  padding: 22,
  backgroundColor: colors.palette.neutral100,
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

const $colorGray: TextStyle = { color: "#C4C4C4" }

const $colorPurple: TextStyle = { color: "#523CF8" }

const $dateAndCurrency: ViewStyle = { flex: 1, alignItems: "flex-end" }

const $center: ViewStyle = { alignItems: "center" }
