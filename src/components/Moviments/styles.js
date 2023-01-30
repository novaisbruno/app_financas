import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    margin-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #dadada;
    padding-bottom: 10px;
`;
export const TextDate = styled.Text`
    color: #bababa;
    font-weight: bold;
    font-size: 16px;
`;

export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3px;
    margin-bottom: 3px;
`;

export const Label = styled.Text`
    color: ${props=>props.type};
    font-size: 17px;
    font-weight: bold;
`;

export const TextValue = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${props=>props.type};
`;

export const Skeleton = styled.View`
    margin-top: 6px;
    width: 80px;
    height: 10px;
    background-color: #dadada;
    border-radius: 8px;
`;