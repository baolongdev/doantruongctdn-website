export const ClbDaCard = ({ clbdasCardRefs, data, index }) => {
    return (
        <a
            ref={(element) => (clbdasCardRefs[index] = element)}
            href={"clb-da/" + data.id}
            className={`clbdas__card mix ${data.tag}`}
        >
            <img
                src={`${data.banner}`}
                alt=""
                className="clbdas__img"
            />
        </a>
    );
};