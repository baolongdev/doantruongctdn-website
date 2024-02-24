import { SocialLinks } from "../../../store/social";
import ContactItem from "./contact-item";

export const ContactInformation = () => {
    const open = (link) => {
        window.open(link);
    };
    return (
        <div className="contact__box">
            <h2 className="section__title">Liên hệ với chúng tôi tại đây</h2>
            <div className="contact__data">
                {SocialLinks.map((data, index) => (
                    <ContactItem
                        key={index}
                        title={data.name}
                        icon={data.icon}
                        description={data.href}
                        onClick={() => open(data.href)}
                    />

                ))}
            </div>
        </div>
    );
};