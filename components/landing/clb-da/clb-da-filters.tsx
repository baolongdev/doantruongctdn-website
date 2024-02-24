import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const ClbDaFilters = ({ clbinfo, activeTab, handleTabClick, handlePrevClick, handleNextClick }) => {
    return (
        <div className="clbdas__filters">
            <button
                className="button button--flex clbdas__filters-btn"
                id="prev-btn"
                onClick={handlePrevClick}
            >
                <div className="clbdas__filters-icon w-8 hover:bg-gray-200 rounded-md">
                    <ArrowLeftIcon />
                </div>
            </button>

            <div className="clbdas__slider select-none">
                {clbinfo.map((tag, index) => (
                    <span
                        key={index}
                        className={`clbdas__item ${activeTab === tag.filter && "active-clbdas"}`}
                        data-filter={tag.filter}
                        onClick={() => handleTabClick(tag.filter)}
                    >
                        {tag.name}
                    </span>
                ))}
            </div>
            <button
                className="button button--flex clbdas__filters-btn "
                id="next-btn"
                onClick={handleNextClick}
            >
                <div className="clbdas__filters-icon w-8 hover:bg-gray-200 rounded-md">
                    <ArrowRightIcon />
                </div>
            </button>
        </div>
    );
};