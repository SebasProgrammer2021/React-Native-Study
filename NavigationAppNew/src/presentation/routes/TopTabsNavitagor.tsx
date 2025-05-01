import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburguerMenu } from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

const TopTabsNavitagor = () => {
    return (
        <>
            <HamburguerMenu />
            <Tab.Navigator>
                <Tab.Screen name="Perfil" component={ProfileScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
            </Tab.Navigator>
        </>
    );
}

export default TopTabsNavitagor;