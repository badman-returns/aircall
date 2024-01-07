import React, { Fragment } from 'react';
import { Paper } from '@mui/material';
import { IActivity } from '../../interface/activity';
import './Activity.css';

export default function Activity({
   from,
   to,
   via,
   duration,
   created_at,
   call_type,
   direction,
}: IActivity) {
   return (
      <Fragment>
         <Paper elevation={2}>
            <div className="activity-container">
               <div className="activity-call-type">icon</div>
               <div className="activity-call-info">info</div>
               <div className="activity-duration">duration</div>
            </div>
         </Paper>
      </Fragment>
   );
}
