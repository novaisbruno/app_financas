import styled from 'styled-components';

export const Container = styled.View`
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 18px;
    margin-top: -24px;
    margin-right: 14px;
    margin-left: 14px;
    border-radius: 5px;
    padding-top: 22px;
    padding-bottom: 22px;
    z-index: 99;
`;

export const EyeButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

export const Item = styled.View``;

export const TextTitle = styled.Text`
    font-size: 20px;
    color: #dadada;
    font-weight: bold;
`;

export const AreaBalance = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextSymbol = styled.Text`
    color: #dadada;
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
`;

export const TextBalance = styled.Text`
    color: #2ecc71;
    font-size: 20px;
    margin-left: 5px;
    font-weight: bold;
`;

export const Skeleton = styled.View`
    margin-top: 6px;
    width: 60px;
    height: 10px;
    background-color: #dadada;
    border-radius: 8px;
`;