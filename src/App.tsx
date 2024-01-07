import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import { fetchActivities } from './store/slices/activities';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSelector } from './store/slices/loader';
import Loader from './components/Loader/Loader';
import ActivityFeed from './components/ActivityFeed/ActivityFeed';
import Header from './components/Header/Header';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function App() {
   const dispatch = useDispatch();
   const { loading } = useSelector(loadingSelector);
   const [value, setValue] = useState('activities');

   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
   };

   useEffect(() => {
      dispatch(fetchActivities());
   }, []);

   return (
      <Fragment>
         <div className="container">
            <div className="screen">
               <div className="header">
                  <Header />
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: 'inherit',
                        position: 'fixed',
                        top: 100,
                        left: 172,
                        background: 'white',
                     }}>
                     <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="activity-tabs">
                        <Tab value="activities" label="Activities" />
                        <Tab value="archieved" label="Archieved" />
                     </Tabs>
                  </Box>
               </div>
               {loading ? <Loader /> : <ActivityFeed />}
            </div>
         </div>
      </Fragment>
   );
}
