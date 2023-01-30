import React from 'react';
import { ActionButton, AreaIcon, Container, Label } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Actions(){
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false} >
        <ActionButton>
            <AreaIcon>
                <Icon name='addfolder' size={30} color="#000" />
            </AreaIcon>
            <Label>Entradas</Label>
        </ActionButton>
        
        <ActionButton>
            <AreaIcon>
                <Icon name='tagso' size={30} color="#000" />
            </AreaIcon>
            <Label>Compras</Label>
        </ActionButton>

        <ActionButton>
            <AreaIcon>
                <Icon name='creditcard' size={30} color="#000" />
            </AreaIcon>
            <Label>Cartões</Label>
        </ActionButton>

        <ActionButton>
            <AreaIcon>
                <Icon name='barcode' size={30} color="#000" />
            </AreaIcon>
            <Label>Boletos</Label>
        </ActionButton>

        <ActionButton>
            <AreaIcon>
                <Icon name='setting' size={30} color="#000" />
            </AreaIcon>
            <Label>Conta</Label>
        </ActionButton>
    </Container>
  );
}