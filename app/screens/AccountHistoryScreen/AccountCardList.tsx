import React, { useState } from "react"
import { ListRenderItem, View, ViewStyle, FlatList, useWindowDimensions } from "react-native"
import { AccountCard } from "./AccountCard"
import { colors } from "../../theme"

type AccountCardListProps = {
  accounts: { id: string; currentBalance: string | number }[]
}

export const AccountCardList = ({ accounts }: AccountCardListProps) => {
  const { width: windowWidth } = useWindowDimensions()

  const renderItem: ListRenderItem<AccountCardListProps> = ({ item: account }) => (
    // <AccountCard id={account.id} currentBalance={account.currentBalance} />
    <View
      style={{
        backgroundColor: "red",
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: "black",
      }}
    ></View>
  )

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        {accounts.map((account, index) => (
          <View key={index} style={$normalDot} />
        ))}
      </View>
      <FlatList
        style={{ height: 10 }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 30}
        decelerationRate="fast"
        horizontal={true}
        data={accounts}
        renderItem={renderItem}
        // onMomentumScrollEnd={onMomentumScrollEnd}
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

const $indicatorContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}
