import { FlatList } from "react-native";
import { Container, FlatListContainer } from "./styles";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";


const handleButtonClick = () => {
    console.log('Você clicou no botão');
};

const data = [{
    id: '1', title: '(start) 6Gb + 100 min + 60 SMS', subTitle: 'R$: 29,90', textInternet: '6GB', textMin:'100', textSMS:'60'

},
{
    id: '2', title: '(start) 6Gb + 100 min + 60 SMS', subTitle: 'R$: 29,90', textInternet: '6GB', textMin:'100', textSMS:'60'

},
{
    id: '3', title: '(start) 6Gb + 100 min + 60 SMS', subTitle: 'R$: 29,90', textInternet: '6GB', textMin:'100', textSMS:'60'

},

]



export function CadastrandoPlano() {
    return (
        <Container>
         
                <Header/>
            <FlatListContainer>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={item.subTitle}
                        textInternet={item.textInternet}
                        textMin={item.textMin}
                        textSMS={item.textSMS}
                    />

                )}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
            </FlatListContainer>
            <Button title="Fechar Pacote"/>
        </Container>
    )
}