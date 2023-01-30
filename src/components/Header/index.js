import React from 'react';
import { ButtonUser, Container, Content, UserName } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default function Header({userName}){
  return (
    <Container pad={statusBarHeight}>
        <Content>
            <UserName>{userName}</UserName>

            <ButtonUser>
                <Icon name='user' size={27} color="#FFF" />
            </ButtonUser>
        </Content>
    </Container>
  );
}