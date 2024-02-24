import { convertNewlinesToSpans } from "../../utils/convertNewlinesToSpans ";

export const AboutContent = ({ title, subtitle }) => {
    return (
        <div className="about__data">
            <h2 className="section__title about__title">
                {convertNewlinesToSpans(title || "")}
            </h2>

            <p className="about__description">
                {convertNewlinesToSpans(subtitle || "")}
            </p>
            <a href="/doantruong" className="button button--flex">
                Tìm hiểu thêm{" "}
                <i className="ri-arrow-right-down-line button__icon"></i>
            </a>
        </div>
    );
};