import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import dynamicLinks from '@react-native-firebase/dynamic-links'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import { Provider } from './src/context/PagesContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Test'
    }
  }
)
const App = createAppContainer(navigator)

export default () => {
  // useEffect(() => {
  //   dynamicLinks()
  //     .getInitialLink()
  //     .then(link => {
  //       console.log(link)
  //       // if (link.url === 'https://invertase.io/offer') {
  //       //   // ...set initial route as offers screen
  //       // }
  //     });
  // }, []);
  return (
    <Provider >
      <App />
    </Provider>
  )
}

const styles = StyleSheet.create({})
