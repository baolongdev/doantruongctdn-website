import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [newsletterSubbed, setNewsletterSubbed] = useState(false);
  const subscribeNewsletter = async (event) => {
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
          // Show sent message
          console.log("Message sent successfully");
          event.target.reset();
          setNewsletterSubbed(true);
        },
        () => {
          console.log("Message not sent (service error)");
          toast.error("Lỗi gửi tin nhắn");
        }
      );
  };

  return (
    <section className="contact section container" id="contact">
      <div className="contact__container grid">
        <div className="contact__box">
          <h2 className="section__title">CONTACT US HERE</h2>

          <div className="contact__data">
            <div className="contact__information">
              <h3 className="contact__subtitle">Fanpage</h3>
              <span
                className="contact__description"
                onClick={() => {
                  window.open("https://www.facebook.com/doantruongtdn");
                }}
              >
                <i className="ri-facebook-fill contact__icon"></i>
                https://www.facebook.com/doantruongtdn
              </span>
            </div>

            <div className="contact__information">
              <h3 className="contact__subtitle">Email</h3>
              <span
                className="contact__description"
                onClick={() => {
                  window.open("mailto:doantruongtdn@trandainghia.edu.vn");
                }}
              >
                <i className="ri-mail-line contact__icon"></i>
                doantruongtdn@trandainghia.edu.vn
              </span>
            </div>
          </div>
        </div>

        <form
          action=""
          onSubmit={subscribeNewsletter}
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
            Send Message
            <i className="ri-arrow-right-up-line button__icon"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
