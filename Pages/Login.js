import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native'
import { useState, useEffect, useRef } from 'react'

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
    // marginBottom: 50,
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
    width: '100%'
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    ...btnBaseStyle,
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



function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const ref_input2 = useRef()

  const verifyUser = (email, password) => {
    if (email.toLowerCase() === 'nick' && password === 'fatec') return alert('OK!')
    alert('Usuário ou senha incorretos :(')
  }


  return (
    <View style={styles.container}>
      <View style={styles.imageLogo}>
        <Image source={require('../assets/CoLunch-logo.png')} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.upperInputText}>E-mail:</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Ex: abc@example.com"
          placeholderTextColor="#c8c8c8"
          onChangeText={(email) => setEmail(email)}
          onSubmitEditing={() => ref_input2.current.focus()}
        />
      </View>

      <View style={styles.textView}>
        <Text style={styles.upperInputText}>Senha:</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="●●●●●●●●●"
          placeholderTextColor="#c8c8c8"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          ref={ref_input2}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
        <Text style={styles.forgot_button}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => verifyUser(email, password)}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Login
