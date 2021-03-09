import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/PagesContext'

const IndexScreen = ({ navigation }) => {
  const { state, getPages } = useContext(Context)

  useEffect(() => {
    getPages()
    // get pages when this page is navigated to
    const listener = navigation.addListener('didFocus', () => {
      getPages()
    })

    //remove listener when we leave this page
    //this the equivalent of componentDidUnmount
    return () => {
      listener.remove()
    }
  }, [])

  return state.pages.length === 0 ? (
    <Text>Loading...</Text>
  ) : (
    <>
      <FlatList
        data={state.pages}
        keyExtractor={(page) => `${page._id}`}
        renderItem={({ item }) => {
          return (
            //'show', {id: item.id} is the way to pass an id as a prop to that screen
            <TouchableOpacity
              style={styles.row}
              onPress={() =>
                navigation.navigate('Show', { pageName: item.pageName })
              }
            >
              <Text style={styles.title}>Page for {item.pageName}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
    textAlign: 'center'
  },
  title: {
    fontSize: 18
  }
})

export default IndexScreen
