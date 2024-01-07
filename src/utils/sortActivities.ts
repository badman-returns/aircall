import { GroupedActivities, IActivity } from '../interface/activity';

const formatDate = (date: Date): string => {
   return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
   });
};

export const groupActivitiesByDate = (
   activities: IActivity[]
): Array<GroupedActivities> => {
   const formattedAndSortedActivities = activities
      .map(activity => ({
         ...activity,
         created_at: formatDate(new Date(activity.created_at)),
      }))
      .sort((itemOne, itemTwo) => itemOne.created_at.localeCompare(itemTwo.created_at));

   const groupedActivities: Array<GroupedActivities> = [];

   formattedAndSortedActivities.forEach(activity => {
      const formattedDate = activity.created_at as string;

      const existingGroup = groupedActivities.find(
         group => group.date === formattedDate
      );

      if (existingGroup) {
         existingGroup.activities.push(activity);
      } else {
         groupedActivities.push({
            date: formattedDate,
            activities: [activity],
         });
      }
   });

   return groupedActivities;
};
