import React, {useState} from 'react';
import { Container, Content, Label, Skeleton, TextDate, TextValue } from './styles';

export default function Moviments({data}){

    const [showValue, setShowValue] = useState(false);
  return (
    <Container onPress={()=>setShowValue(!showValue)} activeOpacity={0.8} >
        
        <TextDate>{data.date}</TextDate>
        
        <Content>
            <Label type={data.type === 1 ? '#3CB371' : '#B22222'}>{data.label}</Label>
           
            {showValue ? (
                <TextValue type={data.type === 1 ? '#2ecc71' : '#e74c3c'} >
                    {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                </TextValue>
            ) : (
                <Skeleton/>
            )}
        </Content>
        
    </Container>
  );
}