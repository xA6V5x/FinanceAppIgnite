import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { Image, TextStyle, ViewStyle, useColorScheme } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AccountHistoryScreen } from "../screens"
import { CardsScreen } from "../screens/CardsScreen"
import { DashboardScreen } from "../screens/DashboardScreen"
import { PaymentsScreen } from "../screens/PaymentsScreen"
import { colors, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

// import { MaterialIcons } from "@expo/vector-icons"
// import { Ionicons } from "@expo/vector-icons"
// import { Feather } from "@expo/vector-icons"
// import { Entypo } from "@expo/vector-icons"

export type DemoTabParamList = {
  DashboardScreen: undefined
  CardsScreen: undefined
  AccountHistoryScreen: undefined
  PaymentsScreen: undefined
}

export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DemoTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<DemoTabParamList>()

export function TabNavigator() {
  const { bottom } = useSafeAreaInsets()
  const theme = useColorScheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          $tabBar,
          {
            height: bottom + 90,
            backgroundColor: colors[theme].backgroundCard,
          },
        ],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            // <MaterialIcons name="account-balance-wallet" size={24} color={focused && "#523CF8"} />
            <Image
              source={
                focused
                  ? require("../../assets/TabBar/dashboardOn.png")
                  : require("../../assets/TabBar/dashboardOff.png")
              }
            />
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="CardsScreen"
        component={CardsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            // <Ionicons name="card" size={24} color={focused && "#523CF8"} />
            <Image
              source={
                focused
                  ? require("../../assets/TabBar/cardOn.png")
                  : require("../../assets/TabBar/cardOff.png")
              }
            />
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="AccountHistoryScreen"
        component={AccountHistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            // <Feather name="bar-chart-2" size={24} color={focused && "#523CF8"} />
            <Image
              source={
                focused
                  ? require("../../assets/TabBar/analyticsOn.png")
                  : require("../../assets/TabBar/analyticsOff.png")
              }
            />
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="PaymentsScreen"
        component={PaymentsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            // <Entypo name="text-document-inverted" size={24} color={focused && "#523CF8"} />
            <Image
              source={
                focused
                  ? require("../../assets/TabBar/paymentsOn.png")
                  : require("../../assets/TabBar/paymentsOff.png")
              }
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  position: "absolute",
  borderTopColor: colors.transparent,
  borderTopLeftRadius: 35,
  borderTopRightRadius: 35,
}

const $tabBarItem: ViewStyle = {
  marginTop: -6,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
