import React from 'react';
import { AreaBalance, Container, EyeButton, Item, TextBalance, TextSymbol, TextTitle } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {MotiView} from 'moti';
import { StyleSheet } from 'react-native';

export default function Balance({balance}){
  return (
    <MotiView
      style={styles.container}
      from={{
        rotateX: '100deg',
        opacity: 0,
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 900
      }}
    >
       <EyeButton>
            <Icon name='eye' size={35} color="#cacaca" />
       </EyeButton>
       <Item>
        <TextTitle>Saldo</TextTitle>
            <AreaBalance>
                <TextSymbol>R$</TextSymbol>
                <TextBalance>{balance}</TextBalance>
            </AreaBalance>
       </Item>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: -24,
    marginRight: 14,
    marginLeft: 14,
    borderRadius: 5,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  }
});