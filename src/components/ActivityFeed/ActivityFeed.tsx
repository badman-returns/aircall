import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { activitiesSelector } from '../../store/slices/activities';
import { groupActivitiesByDate } from '../../utils/sortActivities';
import './ActivityFeed.css';
import { GroupedActivities, IActivity } from '../../interface/activity';
import Activity from '../Activity/Activity';

export default function ActivityFeed() {
   const { activities } = useSelector(activitiesSelector);
   const sortedActivities = groupActivitiesByDate(activities);
   console.info(sortedActivities);

   return (
      <Fragment>
         <div>
            <div className="activity-feed">
               {sortedActivities?.map(
                  (groupedActivities: GroupedActivities) => {
                     return (
                        <Fragment>
                           <div className="activity-date-section">
                              <div className="activity-border"></div>
                              <div className="activity-date">
                                 {groupedActivities.date}
                              </div>
                              <div className="activity-border"></div>
                           </div>
                           {groupedActivities.activities.map(
                              (activities: IActivity) => {
                                 return (
                                    <Fragment key={activities.id}>
                                       <Activity
                                          id={activities.id}
                                          created_at={activities.created_at}
                                          direction={activities.direction}
                                          duration={activities.duration}
                                          is_archived={activities.is_archived}
                                       />
                                    </Fragment>
                                 );
                              }
                           )}
                        </Fragment>
                     );
                  }
               )}
            </div>
         </div>
      </Fragment>
   );
}
