import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import {
  SafeAreaView,
  ScrollView,
  View,
  Animated,
  ViewStyle,
  useWindowDimensions,
} from "react-native"
import { CardAccount } from "./CardAccount"

type AccountsProps = {
  id: string
  currentBalance: string | number
}[]

export const ListAccounts = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  const { width: windowWidth } = useWindowDimensions()

  const [accounts, setAccounts] = useState<AccountsProps>([])

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
    <SafeAreaView style={$container}>
      <View style={$indicatorContainer}>
        {accounts.map((account, indexCard) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (indexCard - 1),
              windowWidth * indexCard,
              windowWidth * (indexCard + 1),
            ],
            outputRange: [6, 15, 6],
            extrapolate: "clamp",
          })
          return <Animated.View key={indexCard} style={[$normalDot, { width }]} />
        })}
      </View>
      <View style={$scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={1}
        >
          {accounts.map((account, accountIndex) => {
            return (
              <View
                style={[
                  $cardContainer,
                  {
                    width: windowWidth,
                  },
                ]}
                key={accountIndex}
              >
                <CardAccount id={account.id} currentBalance={account.currentBalance} />
              </View>
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $scrollContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

const $cardContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const $normalDot: ViewStyle = {
  marginHorizontal: 6,
  marginBottom: 15,
  height: 6,
  backgroundColor: "#FEFEFE",
  borderRadius: 4,
}

const $indicatorContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}
