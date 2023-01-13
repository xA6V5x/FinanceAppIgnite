import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { TabNavigator } from "./TabNavigator"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { SettingsScreen } from "../screens/SettingsScreen"
import { TransactionDetailsScreen } from "../screens/TransactionDetailsScreen"
import { AllTransactionsScreen } from "../screens/AllTransactionsScreen"
import { colors } from "../theme"

export type AppStackParamList = {
  Welcome: undefined
  Transaction: undefined
  AllTransactions: undefined
  Settings: undefined
}

const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const theme = useColorScheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors[theme].backgroundCard,
      }}
    >
      <Stack.Screen name="Welcome" component={TabNavigator} />
      <Stack.Group screenOptions={{ presentation: "modal", animation: "slide_from_bottom" }}>
        <Stack.Screen name="Transaction" component={TransactionDetailsScreen} />
      </Stack.Group>
      <Stack.Screen name="AllTransactions" component={AllTransactionsScreen} />
      <Stack.Group screenOptions={{ presentation: "modal", animation: "slide_from_bottom" }}>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
