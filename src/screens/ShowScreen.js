import React, { useContext, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Context } from '../context/PagesContext'

//This page will be opened with dynamic link

const ShowScreen = ({ navigation }) => {
  const {   state: { page },    getPage  } = useContext(Context)
  let pageName = navigation.getParam('pageName')

  useEffect(() => {
    getPage(pageName)
  }, [])
  return page === null ? (
    <Text>Loading...</Text>
    //Sometimes we navigate faster than the speed that the api return the pagename
    //We'll use a loading text while we wait
  ) : pageName !== page.pageName ? (
    <Text>Loading...</Text>
  ) : (
    <View>
      <Text style={styles.title}>This page is for {page.pageName} </Text>
      <Button style={styles.button} title='Send notification' />
    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10
  },
  button: {
    paddingVertical: 15
  }
})

// pageName == null ? (
//   <Text>Loading...</Text>
// ) :
