import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home from './Pages/Home'
import Login from './Pages/Login'
import RecuperarSenha from './Pages/RecuperarSenha'

export default function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Login /> */}
      <RecuperarSenha />
      <StatusBar style="auto" />
    </>
  )
}
