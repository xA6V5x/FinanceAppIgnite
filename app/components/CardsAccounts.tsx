import React, { useState, useEffect } from "react"
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Animated,
  Dimensions,
  ViewStyle,
  TextStyle,
} from "react-native"

const images = new Array(4).fill("https://images.unsplash.com/photo-1556740749-887f6717d7e4")

const window = Dimensions.get("window")

export const CardsAccounts = () => {
  const [dimensions, setDimensions] = useState({ window: Dimensions.get("window") })
  const [scrollX, setScrollX] = useState(new Animated.Value(0))

  const onDimensionsChange = ({ window }) => {
    setDimensions({ window })
  }

  useEffect(() => {
    Dimensions.addEventListener("change", onDimensionsChange)
    return () => {
      Dimensions.removeEventListener("change", onDimensionsChange)
    }
  }, [])

  const windowWidth = dimensions.window.width

  return (
    <SafeAreaView style={$container}>
      <View style={$indicatorContainer}>
        {images.map((image, imageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: "clamp",
          })
          return <Animated.View key={imageIndex} style={[$normalDot, { width }]} />
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
                style={{
                  width: windowWidth,
                  height: 250,
                }}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={$card}></ImageBackground>
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
  height: 300,
  alignItems: "center",
  justifyContent: "center",
}
const $card: ViewStyle = {
  flex: 1,
  marginVertical: 4,
  marginHorizontal: 16,
  borderRadius: 5,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
}
const $normalDot: ViewStyle = {
  marginHorizontal: 5,
  marginBottom: 15,
  height: 8,
  width: 8,
  borderRadius: 4,
  backgroundColor: "#ffff",
}
const $indicatorContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}
