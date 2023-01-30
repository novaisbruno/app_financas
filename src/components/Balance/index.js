import React, {useState} from 'react';
import { AreaBalance, EyeButton, Item, Skeleton, TextBalance, TextSymbol, TextTitle } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {MotiView} from 'moti';
import { StyleSheet } from 'react-native';

export default function Balance({balance}){

  const [showBalance, setShowBalance] = useState(false);

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
       <EyeButton onPress={()=>setShowBalance(!showBalance)} >
                {showBalance ? (
                   <Icon name='eye' size={35} color="#cacaca" />
                ): (
                  <Icon name='eye-off' size={35} color="#cacaca" />
                )}
            
       </EyeButton>
       <Item>
        <TextTitle>Saldo</TextTitle>
            <AreaBalance>
                <TextSymbol>R$</TextSymbol>
                {showBalance ? (
                   <TextBalance>{balance}</TextBalance>
                ): (
                  <Skeleton/>
                )}
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