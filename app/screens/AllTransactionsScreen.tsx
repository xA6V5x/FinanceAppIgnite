import React, { useEffect, useState } from "react"
import { View, ViewStyle, ScrollView, useColorScheme, useWindowDimensions } from "react-native"
import { Text } from "../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colors } from "../theme"
import { CardTransaction } from "../components/CardTransaction"
import { api } from "../services/api"

type AllTransactionsProps = {
  type: boolean
  icon: any
  title: string
  date: string
  amount: string | number
  currency: string
}[]

export const AllTransactionsScreen = () => {
  const { width: windowWidth } = useWindowDimensions()
  const widthCard = (90 * windowWidth) / 100

  const { bottom } = useSafeAreaInsets()
  const theme = useColorScheme()

  const [allTransactions, setAllTransactions] = useState<AllTransactionsProps>([])

  useEffect(() => {
    try {
      ;(async () => {
        const { data } = await api.getAllTransactions()
        setAllTransactions(data)
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
        <View style={{ width: widthCard }}>
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
