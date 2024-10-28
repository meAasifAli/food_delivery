import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import authReducer from './authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: "root",
    storage: AsyncStorage
}


const persistedAuthReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: persistedAuthReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"]
        }
    })
})

const persistor = persistStore(store)
export { store, persistor }