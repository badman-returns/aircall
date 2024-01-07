export interface IActivity {
   id: string;
   created_at: string;
   direction: string;
   from?: number;
   to?: number;
   via?: number;
   duration: number;
   is_archived: boolean;
   call_type?: string;
}

export type GroupedActivities = {
   date: string;
   activities: IActivity[];
};
