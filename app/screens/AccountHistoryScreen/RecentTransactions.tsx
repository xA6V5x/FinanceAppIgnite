import React, { useEffect, useState } from "react"
import axios from "axios"
import {
  Image,
  View,
  ViewStyle,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Text } from "../../components"
import { colors } from "../../theme"
// import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
// import { useSafeAreaInsets } from "react-native-safe-area-context"
import { CardTransaction } from "../../components/CardTransaction"
import { ButtonViewAllTransactions } from "../../components/ButtonViewAllTransactions"

type TransactionsProps = {
  type: boolean
  icon: any
  title: string
  date: string
  amount: string | number
  currency: string
}[]

export const RecentTransactions = () => {
  const { width: windowWidth } = useWindowDimensions()
  const widthContainer = (windowWidth * 92) / 100
  //   const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  //   const { bottom } = useSafeAreaInsets()
  const navigation = useNavigation()
  const theme = useColorScheme()

  const [transactions, setTransactions] = useState<TransactionsProps>([])

  useEffect(() => {
    try {
      ;(async () => {
        await axios.get("/transactions").then(function (response) {
          setTransactions(response.data.transactions)
        })
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <View
      style={[
        $transactionsContainer,
        { backgroundColor: colors[theme].backgroundCard, width: widthContainer },
      ]}
    >
      <TouchableOpacity activeOpacity={0.8} style={$filterButton}>
        <Image source={require("../../../assets/icons/filter.png")} />
      </TouchableOpacity>
      <Text
        text="Recent transactions"
        size="md"
        weight="bold"
        style={{ color: colors[theme].title }}
      />
      {transactions.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Transaction")}
          >
            <CardTransaction
              index={index}
              manyTransaction={transactions.length}
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
      <ButtonViewAllTransactions />
    </View>
  )
}

const $transactionsContainer: ViewStyle = {
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
