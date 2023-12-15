import { ButtonMessage, ButtonNotification, Container, Logo } from "./styles";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons"

import ImageLogo from "../../assets/favicon.png"

export function Header(){
    return(
        <Container>
            <ButtonNotification>
                <Ionicons name="notifications" size={32} color='#FE3064'/>
            </ButtonNotification>
            <Logo source={ImageLogo}/>
            <ButtonMessage>
                <MaterialCommunityIcons name="message" size={32} color='#FE3064'/>
            </ButtonMessage>
        </Container>
    )
}