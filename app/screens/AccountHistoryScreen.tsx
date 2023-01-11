import React from "react"
import { Image, ImageStyle, View, ViewStyle, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text } from "../components"
import { ListAccounts } from "../components/ListAccounts"
import { colors } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Transactions from "../infoJson/recentTransactions.js"

export const AccountHistoryScreen = () => {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const { bottom } = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <ScrollView style={$scrollContainer}>
      <View style={[$container, { paddingBottom: bottom + 90 }]}>
        <View style={$headerContainer}>
          <Text
            text="Account History"
            size="md"
            style={{ color: colors.palette.neutral100 }}
            weight="bold"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            activeOpacity={0.8}
            style={$settingsButton}
          >
            <Image source={require("../../assets/icons/settingsLight.png")} style={$settingsIcon} />
          </TouchableOpacity>
        </View>
        <ListAccounts />
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
                style={{ flexDirection: "row", marginTop: 15 }}
              >
                <View
                  style={{
                    marginRight: 15,
                    width: 35,
                    height: 35,
                    backgroundColor: "#F76654",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={data.icon} />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    paddingBottom: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: index != Transactions.length - 1 ? "#DCDCDC" : "#ffffff",
                  }}
                >
                  <View>
                    <Text text={data.title} size="xs" weight="bold" />
                    <Text text={data.date} size="xxs" style={{ color: "#C4C4C4" }} />
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Text
                      text={data.type ? `+${data.amount}` : `-${data.amount}`}
                      size="xs"
                      weight="bold"
                      style={{ color: data.type ? "#523CF8" : "#F76654" }}
                    />
                    <Text text={data.currency} size="xxs" style={{ color: "#C4C4C4" }} />
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("AllTransactions")}
          >
            <Text text="View All Transactions" style={{ color: "#523CF8" }} weight="semiBold" />
          </TouchableOpacity>
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

const $transactionsContainer: ViewStyle = {
  width: "92%",
  margin: 11,
  padding: 22,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 30,
  justifyContent: "space-around",
}

const $settingsButton: ViewStyle = { position: "absolute", right: 0, marginRight: 15 }

const $settingsIcon: ImageStyle = { width: 28, height: 28 }

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
