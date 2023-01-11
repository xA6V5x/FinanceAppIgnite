import React, { useRef } from "react"
import {
  SafeAreaView,
  ScrollView,
  View,
  Animated,
  ViewStyle,
  useWindowDimensions,
} from "react-native"
import { CardAccount } from "./CardAccount"

const images = new Array(4).fill("https://images.unsplash.com/photo-1556740749-887f6717d7e4")

export const ListAccounts = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  const { width: windowWidth } = useWindowDimensions()

  return (
    <SafeAreaView style={$container}>
      <View style={$indicatorContainer}>
        {images.map((image, indexCard) => {
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
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={[
                  $cardContainer,
                  {
                    width: windowWidth,
                  },
                ]}
                key={imageIndex}
              >
                <CardAccount />
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
