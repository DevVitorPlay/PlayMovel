import { Button } from "../Button";
import { Container, ContainerButton, ContainerImage, Div, Divider, Icon, SubTitle, Text, Title } from "./styles";
import hbo from "../../assets/hbo.png";
import netflix from "../../assets/netflix.png";
import { useNavigation } from "@react-navigation/native";

type props = {
    title: string;
    subTitle?: string;
    textInternet: string;
    textMin: string;
    textSMS: string;

}

export function Card({ title, subTitle, textInternet, textMin, textSMS }: props) {

    const navigation = useNavigation()

    function handleBeneficios(){
        navigation.navigate('beneficios')
    }


    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Divider />

            <Div>
                <SubTitle>
                    {subTitle}
                </SubTitle>
            </Div>
            <Div>
                <Text>
                    Internet
                </Text>
                <Text>
                    {textInternet}
                </Text>
            </Div>
            <Divider />
            <Div>
                <Text>
                    Minutos
                </Text>
                <Text>
                    {textMin}
                </Text>
            </Div>
            <Divider />
            <Div>
                <Text>
                    SMS
                </Text>
                <Text>
                    {textSMS}
                </Text>
            </Div>
            <Divider />
            <Div>
                <Text>
                    Turbine seu Plano:
                </Text>
            </Div>
            <Div>
                <ContainerImage>
                    <Icon source={hbo} />
                    <Icon source={netflix} />
                </ContainerImage>
                <Button onPress={handleBeneficios} title="+"/>

            </Div>

            <ContainerButton>
                <Button 
                title="Escolher Plano" />
            </ContainerButton>
        </Container>
    )
}