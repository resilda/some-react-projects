import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from '../../template-1/state/slices/crypto';
import { api } from '../../template-1/state/services/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cryptoSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

/**
 * The last value returned by the store's reducer.
 * @returns { RootState } - current state tree of your application
 */
export type RootState = ReturnType<typeof store.getState>;

// Expanding original store object with new dispatch property.
export type AppDispatch = typeof store.dispatch;
