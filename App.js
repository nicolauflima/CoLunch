import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Pages/Home'
import Login from './Pages/Login'
import RecuperarSenha from './Pages/RecuperarSenha'
import Principal from './Pages/PrincipalTab'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerShown: false}}/>
          <Stack.Screen name="Principal" component={Principal} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  )
}
