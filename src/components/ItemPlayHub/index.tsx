import { Button } from "../Button";
import { Container, Icon, Text, Title } from "./styles";

type Props ={
    icon: any,
    title: string;
    text: string;
}

export function ItemPlayHub({icon, title, text}:Props){
    return(
        <Container>
            <Icon source={icon} />
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Button title="Asssinar"/>
        </Container>
    )
}