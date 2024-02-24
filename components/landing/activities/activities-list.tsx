import { ActivityCard } from "./activity-card";

export const ActivitiesList = ({ activities }) => {
    return (
        <div className="activities__container grid">
            {activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
            ))}
        </div>
    );
};