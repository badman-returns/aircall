import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoadingState = { loading: boolean };
const initialState: LoadingState = { loading: false };

const loadingSlice = createSlice({
   name: 'loader',
   initialState,
   reducers: {
      setLoader: (state, actions: PayloadAction<LoadingState>) => {
         state.loading = actions.payload.loading;
      },
   },
});

export const { setLoader } = loadingSlice.actions;
export const loadingSelector = (state: any) => state.rootReducer.loader;
export default loadingSlice.reducer;
