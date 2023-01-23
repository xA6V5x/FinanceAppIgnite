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
import { Dot } from "./Dot"

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
          <Dot key={index} isSelected={index === currentIndex} />
        ))}
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={(windowWidth * 85) / 100 + 20}
        snapToAlignment="center"
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
  height: 15,
  marginBottom: 15,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}
