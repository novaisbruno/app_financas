import React from 'react';
import { AreaMoviments, Container, Title } from './styles';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import {operations} from '../../datas';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';
import {balance} from '../../datas';

export default function Home(){
  return (
    <Container>
        <Header userName="User Name" />
        <Balance balance={balance} />

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