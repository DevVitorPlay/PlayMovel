import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props ={
    type: ButtonTypeStyleProps;
}


export const Container =  styled(TouchableOpacity)<Props>`
    flex: 1;
    width: 80%;
    min-height: 32px;
    max-height: 60px;
    border-radius: 6px;
    background-color: ${({type}) => type === 'PRIMARY' ? '#FE306A' : 'red' };
    justify-content: center;
    align-items: center;
    elevation:3;
    

`;

export const Text = styled.Text`
    font-size: 16px;
    color: #fff;
    
`;