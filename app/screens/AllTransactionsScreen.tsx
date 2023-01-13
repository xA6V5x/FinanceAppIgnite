import axios from "axios"
import React, { useEffect, useState } from "react"
import { View, ViewStyle, ScrollView, useColorScheme } from "react-native"
import { Text } from "../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "../theme"
import { CardTransaction } from "../components/CardTransaction"

import { Transactions } from "../services/api/Routes"

type AllTransactionsProps = {
  type: boolean
  icon: any
  title: string
  date: string
  amount: string | number
  currency: string
}[]

export const AllTransactionsScreen = () => {
  const { bottom } = useSafeAreaInsets()
  const theme = useColorScheme()

  const [allTransactions, setAllTransactions] = useState<AllTransactionsProps>([])

  useEffect(() => {
    try {
      ;(async () => {
        // const transactionsData = await axios.get("/AllTransactions")
        // setAllTransactions(transactionsData.data.AllTransactions)
        setAllTransactions(Transactions)
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

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
          {allTransactions.map((data, index) => {
            return (
              <CardTransaction
                key={index}
                index={index}
                manyTransaction={allTransactions.length}
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
