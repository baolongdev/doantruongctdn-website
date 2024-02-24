import { convertNewlinesToSpans } from "../../utils/convertNewlinesToSpans ";

export const HeroContent = ({ title, subtitle, linkbtn }) => {
    return (
        <div className="home__data">
            <h1 className="home__title">
                {convertNewlinesToSpans(title || "")}
            </h1>
            <p className="home__description">
                {convertNewlinesToSpans(subtitle || "")}
            </p>
            <a href={linkbtn} className="button button--flex">
                Tiềm hiểu thêm
                <i className="ri-arrow-down-line button__icon"></i>
            </a>
        </div>
    );
};