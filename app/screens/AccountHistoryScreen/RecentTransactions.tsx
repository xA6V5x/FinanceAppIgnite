import React from "react"
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
import { CardTransaction } from "../../components/CardTransaction"
import { ButtonViewAllTransactions } from "../../components/ButtonViewAllTransactions"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"

type RecenTransactionsProps = {
  transactions: {
    type: boolean
    icon: any
    title: string
    date: string
    amount: string | number
    currency: string
  }[]
  currentAccount: number
}

export const RecentTransactions = ({ transactions, currentAccount }: RecenTransactionsProps) => {
  const { width: windowWidth } = useWindowDimensions()
  const widthContainer = (windowWidth * 92) / 100
  const navigation = useNavigation()
  const theme = useColorScheme()

  return (
    <Animated.View
      entering={FadeIn.delay(300)}
      exiting={FadeOut.duration(200)}
      key={currentAccount}
    >
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
    </Animated.View>
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
