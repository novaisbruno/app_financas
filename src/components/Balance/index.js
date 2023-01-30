import React from 'react';
import { AreaBalance, Container, EyeButton, Item, TextBalance, TextSymbol, TextTitle } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function Balance({balance}){
  return (
    <Container>
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
    </Container>
  );
}