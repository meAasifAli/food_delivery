import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import authReducer from './authSlice'
import restaurantReducer from './restaurantSlice'
import addressReducer from "./addressSlice"
import customizationReducer from './customizationSlice'

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'



const persistAuthConfig = {
    key: "auth",
    storage: AsyncStorage
}

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer)

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: persistedAuthReducer,
        restaurant: restaurantReducer,
        address: addressReducer,
        customization: customizationReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"]
        }
    })
})

const persistor = persistStore(store)
export { store, persistor }