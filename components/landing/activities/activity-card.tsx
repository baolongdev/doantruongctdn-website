export const ActivityCard = ({ activity }) => {
    return (
        <div className="activities__card">
            <div className="activities__card-frame">
                <img
                    className="activities__card-img"
                    src={activity.img}
                    alt=""
                />
            </div>
            <div className="activities__card-data">
                <h2 className="activities__card-title">
                    {activity.title.replace("/", "")}
                </h2>
                <h3 className="activities__card-subtitle">{activity.subtitle}</h3>
                <a href={activity.link} className="activities__card-button">
                    Tìm hiểu thêm{" "}
                    <i className="ri-arrow-right-line activities__icon"></i>
                </a>
            </div>
        </div>
    );
};