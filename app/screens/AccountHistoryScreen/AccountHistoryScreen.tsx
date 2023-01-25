import React, { useEffect, useState } from "react"
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  RefreshControl,
  TouchableOpacity,
  useColorScheme,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Screen, Text } from "../../components"
import { AccountCardList } from "./AccountCardList"
import { colors } from "../../theme"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { RecentTransactions } from "./RecentTransactions"
import { api } from "../../services/api"

type AccountCardListProps = {
  id: string
  name: string
  currentBalance: string | number
}[]

type TransactionsProps = {
  type: boolean
  icon: any
  title: string
  date: string
  amount: string | number
  currency: string
}[]

// -----------API MOCK-----------
// const mock = new MockAdapter(axios)
// mock.onGet("/accounts").reply(200, {
//   accounts: Accounts,
// })

// mock.onGet("/transactions").reply(200, {
//   transactions: Transactions,
// })

// -------------------------------

export const AccountHistoryScreen = () => {
  const { bottom } = useSafeAreaInsets()
  const navigation = useNavigation()
  const theme = useColorScheme()

  const [accounts, setAccounts] = useState<AccountCardListProps>([])

  const [transactions, setTransactions] = useState<TransactionsProps>([])

  const [activeAccountId, setActiveAccount] = useState<number>(0)

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  useEffect(() => {
    getAccounts()
  }, [])

  // useEffect(() => {
  //   getRecentTransactions(activeAccountId)
  // }, [])

  const getAccounts = async () => {
    try {
      ;(async () => {
        const { data } = await api.getAccounts()
        setAccounts(data)
      })()
    } catch (error) {
      console.log(error)
    }
  }

  // const getRecentTransactions = async (activeAccountId: number) => {
  //   try {
  //     ;(
  //       async () => {
  //       await axios.get("/transactions").then(function (response) {
  //         setTransactions(response.data.transactions)
  //       })
  //     })()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const refreshData = async () => {
    setIsRefreshing(true)
    await Promise.all([
      getAccounts(),
      // , activeAccountId && getRecentTransactions(activeAccountId)
    ])
    setIsRefreshing(false)
  }

  return (
    <Screen
      preset="scroll"
      ScrollViewProps={{
        overScrollMode: "always",
        refreshControl: (
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshData}
            tintColor="white"
            colors={["#523CF8"]}
          />
        ),
      }}
      style={[$scrollContainer, { backgroundColor: colors[theme].background }]}
    >
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
        {accounts && (
          <AccountCardList accounts={accounts} onChangeCurrentAccount={setActiveAccount} />
        )}
        {transactions && (
          <RecentTransactions transactions={transactions} currentAccount={activeAccountId} />
        )}
      </View>
    </Screen>
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
  marginBottom: 30,
  position: "relative",
  width: "100%",
  alignItems: "center",
}

const $settingsButton: ViewStyle = { position: "absolute", right: 0, marginRight: 15 }

const $settingsIcon: ImageStyle = { width: 28, height: 28 }
