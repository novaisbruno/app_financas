import styled from 'styled-components/native';
import mainStyles from '../../mainStyles';

export const Container = styled.View`
    background-color: ${mainStyles.colors.prymary};
    padding-top: ${props=>props.pad}px;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 40px;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const UserName = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;

export const ButtonUser = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: rgba(255,255,255, 0.5);
    justify-content: center;
    align-items: center;
    border-radius: ${50/2}px;
`;