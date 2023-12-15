import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Text } from "./styles";
type Props = TouchableOpacityProps &{
    title: string;
    onPress?: () => void;
    type?: ButtonTypeStyleProps;
}

export function Button({title, onPress, type = 'PRIMARY', ...rest}: Props){
    return(
        <Container
        type={type}
        {...rest} 
        onPress={onPress}
        >
            <Text>
                {title}
            </Text>
        </Container>
    )
}