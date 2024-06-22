import { CARD_ADD, HOME } from 'const/routes';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'redux/store';
import { persistStore } from 'redux-persist';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        FCSubjectRounded: require('../assets/fonts/FC-Subject-Rounded-Regular.ttf')
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={HOME} />
                    <Stack.Screen name={CARD_ADD} />
                </Stack>
            </PersistGate>
        </Provider>
    );
}
