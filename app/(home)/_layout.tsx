import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={{
                headerTintColor: '#ff0192',
                headerShadowVisible: false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000'
                }
            }}
        >
            
            <Tabs.Screen name="home" options={{
                tabBarIcon: ({color, focused}) => (
                    <Ionicons
                        name={ focused ? "calendar-sharp" : "calendar-outline"}
                        color={color}
                        size={24}
                    />
                )
            }} />
            <Tabs.Screen name="calendar" options={{
                tabBarIcon: ({color, focused}) => (
                    <Ionicons
                        name={ focused ? "home-sharp" : "home-outline"}
                        color={color}
                        size={24}
                    />
                )
                
            }} />
        </Tabs>
    )

}