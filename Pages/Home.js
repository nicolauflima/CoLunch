import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native'
import { useState, useEffect } from 'react'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function Home() {

  useEffect(() => {
    setTimeout(() => {

    }, 5000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require('../assets/CoLunchInitialScreend.png')} />
    </View>
  )
}


export default Home
