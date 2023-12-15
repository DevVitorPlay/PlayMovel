import { Container } from "./styles";
import {FontAwesome} from '@expo/vector-icons'

interface ButtonHomeProps {
    size: number;
    color: string;
    
  }

export function ButtonHome( {size, color}: ButtonHomeProps){
    return(
        <Container>
            <FontAwesome name="home" color={'#fff'} size={32}/>
        </Container>
    )
}