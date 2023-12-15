import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CadastrandoPlano } from "../screens/CadastroPlano";
import { Beneficios } from "../screens/Beneficios";
import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { Home } from "../screens/Home";
import { Faturas } from "../screens/Faturas";
import { ButtonHome } from "../components/ButtonHome";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false,
            tabBarStyle:{
                position:'absolute',
                bottom: 14,
                left: 14,
                right: 14,
                elevation: 2,
                borderRadius:6,
                height:60,
                paddingBottom: 5,

                
            },
            tabBarActiveTintColor:'#FE306A'
        
        }} >
              <Tab.Screen
            name="faturas"
            component={Faturas}
            options={{
                tabBarIcon: ({color, size}) => <MaterialIcons  name="attach-money" color={color} size={size}/>,
                tabBarLabel: 'Faturas'
                
            }}
            />
          
             <Tab.Screen
            name="beneficios"
            component={Beneficios}
            options={{
                tabBarIcon: ({color, size}) => <Feather name="gift" color={color} size={size}/>,
                tabBarLabel: 'Beneficios'
            }}
            />
            <Tab.Screen
            name="home"
            component={Home}
            options={{
                tabBarIcon: ({color, size}) => <ButtonHome color={color} size={size}/>,
                tabBarLabel: ''
                
            }}
            />
              <Tab.Screen
            name="planos"
            component={CadastrandoPlano}
            options={{
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons  name="cellphone" color={color} size={size}/>,
                tabBarLabel: 'Planos'
            }}
            />
                <Tab.Screen
            name="user"
            component={CadastrandoPlano}
            options={{
                tabBarIcon: ({color, size}) => <Feather  name="user" color={color} size={size}/>,
                tabBarLabel: 'User'
            }}
            />
            
        </Tab.Navigator>
    )
}