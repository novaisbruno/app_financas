import React from 'react';
import { AreaMoviments, Container, Title } from './styles';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import {operations} from '../../datas';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

export default function Home(){
  return (
    <Container>
        <Header userName="User Name" />
        <Balance balance="3.250.67" />

        <Actions/>

        <Title>Últimas movimentações</Title>

       <AreaMoviments showsVerticalScrollIndicator={false}>
        {operations.map((item)=>{
            return (
                <Moviments data={item}  key={item.id} />
            );
          })}
       </AreaMoviments>

    </Container>
  );
}