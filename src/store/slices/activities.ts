import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActivity } from '../../interface/activity';
import { getActivities } from '../../apis/activities';
import { setLoader } from './loader';

type ActivityState = { activities: Array<IActivity> };
const initialState: ActivityState = {
   activities: [],
};

const activitiesSlice = createSlice({
   name: 'activities',
   initialState,
   reducers: {
      storeActivities: (state, actions: PayloadAction<ActivityState>) => {
         state.activities = actions.payload.activities;
      },
   },
});

export const { storeActivities } = activitiesSlice.actions;
export const activitiesSelector = (state: any) => state.rootReducer.activities;
export default activitiesSlice.reducer;
export const fetchActivities = (): any => async (dispatch: any) => {
   dispatch(setLoader({ loading: true }));
   const response = await getActivities();
   dispatch(storeActivities({ activities: response }));
   dispatch(setLoader({ loading: false }));
};
