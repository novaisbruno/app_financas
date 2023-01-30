import React from 'react';
import { ButtonUser, Container } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { StatusBar, StyleSheet } from 'react-native';
import {MotiView, MotiText} from 'moti';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default function Header({userName}){
  return (
    <Container pad={statusBarHeight}>
        <MotiView
          style={styles.content}
          from={{
            translateY: -150,
            opacity: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            type: 'timing',
            duration: 800,
            delay: 300
          }}
        >
            <MotiText
              style={styles.userName}
              from={{
                translateX: - 300 
              }}
              animate={{
                translateX: 0
              }}
              transition={{
                type: 'timing',
                duration: 800,
                delay: 800
              }}
            >
              {userName}
            </MotiText>

            <ButtonUser>
                <Icon name='user' size={27} color="#FFF" />
            </ButtonUser>
        </MotiView>
    </Container>
  );
}

const styles = StyleSheet.create({
  content:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  userName:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }
});