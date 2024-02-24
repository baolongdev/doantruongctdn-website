// import { useState } from "react";

export async function subscribeCustomerIo(email: String) {
  const resp = await fetch("https://track.customer.io/api/v1/forms/newsletter_form/submit", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${process.env.NEXT_PUBLIC_CUSTOMER_IO_FORM_AUTH}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "data": {
        email,
        "newsletter_sub": "true"
      }
    })
  });
  return resp.ok;
}

export const Newsletter = () => {
  // const [newsletterSubbed, setNewsletterSubbed] = useState(false);

  // const subscribeNewsletter = async (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const success = subscribeCustomerIo(email);
  //   if (success) {
  //     setNewsletterSubbed(true);
  //   }
  // }

  return (
    <>
      <h3 className="footer__title">
        Đăng ký nhận bản tin của chúng tôi
        <br /> để cập nhật thông tin mới nhất
      </h3>
      <div className="footer__subscribe">
        <input type="email" required name="email" placeholder="Enter your email" className="footer__input" />
        <button type="submit" value="Submit" className="button button--flex footer__button">
          Subscribe
          <i className="ri-arrow-right-up-line button__icon"></i>
        </button>
      </div>
    </>
  );
}