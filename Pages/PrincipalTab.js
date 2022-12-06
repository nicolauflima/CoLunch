import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabInicio from './TabInicio'
import TabBusca from './TabBusca'
import TabEventos from './TabEventos'
import TabPerfil from './TabPerfil'
const Tab = createBottomTabNavigator()


function PrincipalTab({ navigation }) {
  return (
    <>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#F50057', headerShown: false }}>
        <Tab.Screen name="Inicio" component={TabInicio} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />) }} />
        <Tab.Screen name="Busca" component={TabBusca} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="magnify" color={color} size={size} />) }} />
        <Tab.Screen name="Meus eventos" component={TabEventos} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="calendar-outline" color={color} size={size} />), tabBarBadge: 3, }} />
        <Tab.Screen name="Perfil" component={TabPerfil} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />) }} />
      </Tab.Navigator>
    </>
  )
}


export default PrincipalTab
