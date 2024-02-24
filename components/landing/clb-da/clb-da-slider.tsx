import { ClbDaCard } from "./clb-da-card";

export const ClbDaSlider = ({ clbinfo, clbdasContainerRef, clbdasCardRefs }) => {
    return (
        <div
            ref={clbdasContainerRef}
            className="clbdas__container container grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
        >
            {clbinfo.map((data, index) => (
                <ClbDaCard key={index} clbdasCardRefs={clbdasCardRefs} data={data} index={index} />
            ))}
        </div>
    );
};