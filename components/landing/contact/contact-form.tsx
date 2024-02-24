import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
    const [newsletterSubbed, setNewsletterSubbed] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.user_email.value;
        const user_name = event.target.user_name.value;
        const user_message = event.target.user_message.value;
        emailjs
            .sendForm(
                "service_mge5eei",
                "template_z3tm64k",
                "#contact-form",
                "ktSRLBoa5cQ2T85FR"
            )
            .then(
                () => {
                    console.log("Message sent successfully");
                    event.target.reset();
                    setNewsletterSubbed(true);
                },
                () => {
                    console.log("Message not sent (service error)");
                    // toast.error("Lỗi gửi tin nhắn");
                }
            );
    };

    return (
        <form
            action=""
            onSubmit={handleFormSubmit}
            className="contact__form"
            id="contact-form"
        >
            <div className="contact__inputs">
                <div className="contact__content">
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        required
                        placeholder=" "
                        className="contact__input"
                    />
                    <label htmlFor="" className="contact__label">
                        Name
                    </label>
                </div>
                <div className="contact__content">
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        required
                        placeholder=" "
                        className="contact__input"
                    />
                    <label htmlFor="" className="contact__label">
                        Email
                    </label>
                </div>
                <div className="contact__content contact__area">
                    <textarea
                        name="user_message"
                        id="user_message"
                        required
                        placeholder=" "
                        className="contact__input"
                    ></textarea>
                    <label htmlFor="" className="contact__label">
                        Message
                    </label>
                </div>
            </div>
            {newsletterSubbed && (
                <div className="contact__success-message">
                    Cảm ơn bạn đã đăng ký bản tin của chúng tôi!
                </div>
            )}
            <button type="submit" className="button button--flex">
                Gửi tin nhắn
                <i className="ri-arrow-right-up-line button__icon"></i>
            </button>
        </form>
    );
};