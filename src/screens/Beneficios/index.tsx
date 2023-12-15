import Carousel from "react-native-snap-carousel";
import { Container, Divider, Title } from "./styles";
import { Dimensions, FlatList } from "react-native";
import { CaroselPlayHub } from "../../components/CaroselPlayHub";
import { ItemPlayHub } from "../../components/ItemPlayHub";

const SLIDER_WIDTH = Dimensions.get('screen').width;
export const ITEM_WIDTH = SLIDER_WIDTH * 1

const carouselItem = [{
    id: '1', image: require("../../assets/Image/1920x1080-MASHUP-WBG-IDI.png"),
},

{
    id: '2', image: require("../../assets/Image/melhor-streaming-2021-netflix-1.png"),
},
]

const dataPlayHub = [{
    id: '1',
    icon: require("../../assets/hbo.png"),
    title:'HBO Max',
    text:'R$ 14,90 mês'
},
{
    id: '2',
    icon: require("../../assets/netflix.png"),
    title:'Netflix',
    text:'R$ 14,90 mês'
}

]

export function Beneficios() {
    return (
        <Container>
            
            <Carousel
                data={carouselItem}
                renderItem={({ item }) => (
                    <CaroselPlayHub index={item.id} image={item.image} />
                )}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
                loop
                autoplay
                autoplayDelay={1000}
                autoplayInterval={4000}
            />
            <Title>
                Vídeos e música
            </Title>
                <FlatList
                data={dataPlayHub}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ItemPlayHub icon={item.icon} title={item.title} text={item.text}/>
                )}
                horizontal
                
                />
                <Divider/>
            
        </Container>
    )
}