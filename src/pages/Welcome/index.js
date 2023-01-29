import React from 'react';
import { Container } from './styles';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import * as AnimaTable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome(){

    const navigation = useNavigation();

  return (
    <Container>

        <View style={styles.areaLogo}>
            <AnimaTable.Image 
                animation='flipInY'
                delay={200}
                source={require('../../assets/img/logo.png')} 
                style={{width: '100%'}}
                resizeMode='contain'
            />
        </View>

        <AnimaTable.View
            animation='fadeInUp' 
            delay={500}
            style={styles.form}
        >
            <Text style={styles.title} >Monitore, organize seus gastos de qualquer lugar!</Text>
            <Text style={styles.text}>Faça o Login para começar</Text>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.buttonText} >Acessar</Text>
            </TouchableOpacity>
        </AnimaTable.View>

    </Container>
  );
}

const styles = StyleSheet.create({
    areaLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form:{
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#6a6a6a'
    },
    text:{
        color: '#a1a1a1',
        fontSize: 16
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});