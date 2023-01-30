import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    max-height: 80px;
    margin-bottom: 14px;
    margin-top: 18px;
    padding-left: 14px;
    padding-right: 14px;
`;

export const ActionButton = styled.TouchableOpacity`
    align-items: center;
    margin-right: 20px;
`;

export const AreaIcon = styled.View`
    background-color: #ecf0f1;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.Text`
    margin-top: 4px;
    text-align: center;
    font-weight: bold;
    color: #000;
`;