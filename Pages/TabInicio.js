import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'

const btnBaseStyle = {
  borderRadius: 16,
  height: 56,
  width: "80%",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    position: 'absolute',
    top: 80
  },
  inputView: {
    ...btnBaseStyle,
    borderColor: "#F50057",
    borderWidth: 2,
    marginBottom: 20,
    alignItems: "center",
  },
  textView: {
    justifyContent: '',
    alignItems: "baseline",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    ...btnBaseStyle,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
  },
  upperInputText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 0,
    marginBottom: 7
  },
  loginText: {
    color: '#FFF',
  }
})




function RecuperarSenha({ navigation }) {
  const [email, setEmail] = useState('')

  const verifyEmail = () => {
    if (email.toLowerCase() === 'nick') {
      alert('Enviamos um email para recuperar a sua senha')
      return navigation.navigate('Login')
    }

    alert('Usuário não existe')
  }

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.upperInputText}>INICIO</Text>
      </View>
    </View>
  )
}


export default RecuperarSenha
