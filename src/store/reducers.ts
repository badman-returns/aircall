import { combineReducers } from '@reduxjs/toolkit';
import activities from './slices/activities';
import loader from './slices/loader';

const rootReducer = combineReducers({
   activities,
   loader,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
