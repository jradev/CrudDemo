
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard, CreateEditManga } from '@/screens';

const Stack = createNativeStackNavigator();


const AppNavigation = () => (
    <Stack.Navigator screenOptions={{
        headerBackTitleVisible: false
      }}>
        <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />        
        <Stack.Screen options={{headerShown: false}} name="CreateEditManga" component={CreateEditManga} />   
    </Stack.Navigator>

)


export default AppNavigation