import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ICryptoList {
  cryptoList: Array<any>;
}

const initialState: ICryptoList = {
  cryptoList: [],
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    cryptoComponent: (state, action: PayloadAction<ICryptoList>) => {
      state.cryptoList = action.payload.cryptoList;
    },
  },
});

export const cryptoComponentSelector = (state: RootState) => state.cryptoSlice;

// Methods used in the application components', in order to update the state (modifies the reducer).
export const { cryptoComponent } = cryptoSlice.actions;

// manages an individual data slice.
export default cryptoSlice.reducer;
