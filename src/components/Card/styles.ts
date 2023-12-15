import styled from "styled-components/native";

export const Container = styled.View`
  max-height: 500px;
  width: 300px;
  border-radius: 8px;
  elevation: 4;
  background-color: #fff;
  padding: 20px 20px;
  margin: 0 10px;
  align-items: center;
  
  
  
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const SubTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fe306a;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  border: #aeaeae;
  background-color: #aeaeae;
 
`;

export const Text = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Div = styled.View`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin: 5px 0;
`;

export const Icon = styled.Image`
  height: 32px;
  width: 32px;
  margin-right: 10px;
  margin-bottom: 5px;
`;
export const ContainerImage = styled.View`
  display: flex;
  flex-direction: row;
  width: 85%;
`;

export const ContainerButton = styled.View`
  position: absolute;
  bottom: 20px;
  left: 18%;
  width: 100%;
  height: 60px;
`;