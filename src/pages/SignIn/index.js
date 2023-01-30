import React from 'react';
import { Container } from './styles';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import * as AnimaTable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function SignIn(){

  const navigation = useNavigation();

  return (
    <Container>
        <AnimaTable.View 
          animation="fadeInLeft" 
          delay={500}
          style={styles.header}
        >
          <Text style={styles.message} >Bem vindo(a)</Text>
        </AnimaTable.View>

        <AnimaTable.View
          animation="fadeInUp"
          style={styles.form}
        >
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder='Digite seu email'
            style={styles.input}
            placeholderTextColor='#a1a1a1'
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder='Digite sua senha'
            style={styles.input}
            placeholderTextColor='#a1a1a1'
          />

          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')} >
            <Text style={styles.buttonText} >Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText} >Não possui uma conta? Cadastra-se</Text>
          </TouchableOpacity>
        </AnimaTable.View>

    </Container>
  );
}

const styles = StyleSheet.create({
  header:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  form:{
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  label:{
    fontSize: 20,
    marginTop: 28,
    color: '#6a6a6a'
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 5,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 15,
    alignSelf: 'center',
  },
  registerText:{
    color: '#a1a1a1',
    fontSize: 16,
  }
});