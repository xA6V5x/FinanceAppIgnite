import React, { useState } from "react"
import {
  ListRenderItem,
  View,
  ViewStyle,
  FlatList,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native"
import { AccountCard } from "./AccountCard"

type AccountCardListProps = {
  accounts: { id: string; currentBalance: string | number }[]
  onChangeCurrentAccount: (n: number) => void
}

type AccountProps = {
  id: string
  currentBalance: string | number
}

export const AccountCardList = ({ accounts, onChangeCurrentAccount }: AccountCardListProps) => {
  const { width: windowWidth } = useWindowDimensions()

  const [currentIndex, setCurrentIndex] = useState(0)

  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.ceil(event.nativeEvent.contentOffset.x / windowWidth)
    setCurrentIndex(index)
    onChangeCurrentAccount(index)
  }

  const renderItem: ListRenderItem<AccountProps> = ({ item: account }) => (
    <AccountCard id={account.id} currentBalance={account.currentBalance} />
  )

  return (
    <View style={$container}>
      <View style={$indicatorContainer}>
        {accounts.map((account, index) => (
          <View key={index} style={index === currentIndex ? $selectDot : $normalDot} />
        ))}
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={(windowWidth * 85) / 100}
        decelerationRate="fast"
        horizontal={true}
        data={accounts}
        renderItem={renderItem}
        onMomentumScrollEnd={onMomentumScrollEnd}
        keyExtractor={(Account) => Account.id}
      />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}

const $indicatorContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}

const $normalDot: ViewStyle = {
  marginHorizontal: 6,
  marginBottom: 15,
  width: 8,
  height: 8,
  backgroundColor: "#FEFEFE",
  borderRadius: 4,
}

const $selectDot: ViewStyle = {
  marginHorizontal: 6,
  marginBottom: 15,
  padding: 4.5,
  borderRadius: 10,
  borderWidth: 2.5,
  borderColor: "#FEFEFE",
}
