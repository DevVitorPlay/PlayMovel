import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const Container = styled(SafeAreaView)`
  width: 100%;

`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  padding: 20px;
  

`;
export const Divider = styled.View`
  height: 1px;
  width: 80%;
  margin: 10px auto ;
  border: #aeaeae;
  background-color: #aeaeae;
 
`;
