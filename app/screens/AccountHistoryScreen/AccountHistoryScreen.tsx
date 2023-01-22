import React, { useEffect, useState } from "react"
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text } from "../../components"
import { AccountCardList } from "./AccountCardList"
import { colors } from "../../theme"
// import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { RecentTransactions } from "./RecentTransactions"

import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { Accounts, Transactions } from "../../services/api/infoRoutes"

type AccountCardListProps = {
  id: string
  currentBalance: string | number
}[]

export const AccountHistoryScreen = () => {
  // const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const { bottom } = useSafeAreaInsets()
  const navigation = useNavigation()
  const theme = useColorScheme()

  const mock = new MockAdapter(axios)

  mock.onGet("/accounts").reply(200, {
    accounts: Accounts,
  })

  mock.onGet("/transactions").reply(200, {
    transactions: Transactions,
  })

  const [accounts, setAccounts] = useState<AccountCardListProps>([])

  useEffect(() => {
    try {
      ;(async () => {
        await axios.get("/accounts").then(function (response) {
          setAccounts(response.data.accounts)
        })
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <ScrollView style={[$scrollContainer, { backgroundColor: colors[theme].background }]}>
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
            <Image
              source={require("../../../assets/icons/settingsLight.png")}
              style={$settingsIcon}
            />
          </TouchableOpacity>
        </View>
        {accounts && <AccountCardList accounts={accounts} />}
        <RecentTransactions />
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

const $settingsButton: ViewStyle = { position: "absolute", right: 0, marginRight: 15 }

const $settingsIcon: ImageStyle = { width: 28, height: 28 }
