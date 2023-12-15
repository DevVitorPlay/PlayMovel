import { Container, Image } from "./styles"


type Props={
        index: string;
        image: any;

}

export function CaroselPlayHub({index, image}: Props){
    return(
        <Container>
            <Image key={index} source={image}/>
        </Container>
    )
}