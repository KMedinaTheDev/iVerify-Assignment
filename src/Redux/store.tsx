import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
// this is where I would setup the store configuration

// ex:
import UISlice from './UI/UISlice';
import userSlice from './User/UserSlice';
import { baseAPI } from './API/BaseAPI';


const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    user: userSlice,
    ui: UISlice,
    [baseAPI.reducerPath]: baseAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).prepend(listenerMiddleware.middleware).concat(baseAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch