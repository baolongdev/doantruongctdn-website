import React from "react";
import { SchoolAddress } from "../../store/school-address";
import { SocialLinks } from "../../store/social";
import { TabMain } from "../../store/tab-main";

export default function Footer() {
  // const [newsletterSubbed, setNewsletterSubbed] = useState(false);
  //   const subscribeNewsletter = async (event) => {
  //     event.preventDefault();
  //     const email = event.target.email.value;
  //     const success = subscribeCustomerIo(email);
  //     if (success) {
  //       setNewsletterSubbed(true);
  //     }
  //   }

  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <img
              src="/assets/logo/logo-doan-truong-chu.png"
              className="footer__logo-icon"
              alt=""
            />
          </a>

          {/* <h3 className="footer__title">
                    Đăng ký nhận bản tin của chúng tôi
                    <br /> để cập nhật thông tin mới nhất
                </h3>

                <div className="footer__subscribe">
                    <input type="email" required placeholder="Enter your email" className="footer__input" />

                    <button type="submit" value="Submit" className="button button--flex footer__button">
                        Subscribe
                        <i className="ri-arrow-right-up-line button__icon"></i>
                    </button>
                </div> */}
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Liên lạc</h3>

          <ul className="footer__data">
            {/* <li className="footer__information">
              Cô Phúc: 070 280 6028 <br />
              (Trợ lý thanh niên)
            </li>
            <li className="footer__information">
              Thầy Phương: 0944 461 267 <br />
              (Giáo viên hỗ trợ công tác Đoàn)
            </li> */}
            <ul className="flex flex-col gap-4">
              {TabMain.map((tab, index) => (
                <li className="nav__item" key={index}>
                  <a
                    href={`${tab.link}`}
                    className={`nav__link ${index === 0 ? "active-link" : ""} ${
                      tab.class
                    }`}
                  >
                    {tab.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="footer__social">
              {SocialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="footer__social-link"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Địa chỉ</h3>

          <ul className="footer__data">
            {SchoolAddress.map((address, index) => (
              <a
                key={index}
                href={address.href}
                target="_blank"
                className="footer__social-link"
              >
                <li className="footer__information">{address.value}</li>
              </a>
            ))}
          </ul>
        </div>
        {/* <div className="footer__content">
                <h3 className="footer__title">
                    We accept all credit cards
                </h3>

                <div className="footer__cards">
                    <img src="src/assets/img/card1.png" alt="" className="footer__card" />
                    <img src="src/assets/img/card2.png" alt="" className="footer__card" />
                    <img src="src/assets/img/card3.png" alt="" className="footer__card" />
                    <img src="src/assets/img/card4.png" alt="" className="footer__card" />
                </div>
            </div> */}
      </div>
      <p
        onClick={() => {
          window.location.href = "https://www.facebook.com/blong1204";
        }}
        className="footer__copy"
      >
        Website có sử dụng một số hình ảnh từ Câu lạc bộ - Dự án trực thuộc Đoàn
        trường.
        <br />
        blong1204
      </p>
    </footer>
  );
}

// import Link from 'next/link';
// import React, { useState } from 'react';
// import { subscribeCustomerIo } from '../utils/newsletter';
// function Footer() {
//   const [newsletterSubbed, setNewsletterSubbed] = useState(false);
//   const subscribeNewsletter = async (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const success = subscribeCustomerIo(email);
//     if (success) {
//       setNewsletterSubbed(true);
//     }
//   }
//   const socialLinks = [
//     { name: 'Facebook', url: 'https://www.facebook.com/', iconClass: 'ri-facebook-fill' },
//     { name: 'Behance', url: 'https://www.behance.net/', iconClass: 'ri-behance-fill' },
//     { name: 'LinkedIn', url: 'https://www.linkedin.com/', iconClass: 'ri-linkedin-fill' },
//     { name: 'Instagram', url: 'https://www.instagram.com/', iconClass: 'ri-instagram-line' },
//     { name: 'Dribbble', url: 'https://dribbble.com/', iconClass: 'ri-dribbble-line' },
//   ];
//   const menuItems = [
//     { label: "Home", href: "/" },
//     { label: "Showcase", href: "/showcase" },
//     { label: "Pricing", href: "/pricing" },
//     { label: "Docs", href: "/docs" },
//   ];

//   return (
//     <footer className='footer'>
//       <div className="content mod--footer">
//         <div className="footer__columns">
//           <div className="footer__col col--1">
//             <a href="#" className="footer__logo w-inline-block">
//               <img
//                 src="assets/Logo.svg"
//                 loading="eager"
//                 alt=""
//                 className="logo-img"
//                 height={84}
//                 width={84}
//               />
//             </a>
//             <div className="footer__desc">
//               . . .<br />
//               AR_Advertisement
//               <br />
//             </div>
//           </div>
//           <div className="footer__col col--2">
//             <nav className="footer__nav">
//               {menuItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   data-anim="link"
//                   className="footer__nav-link"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </nav>

//             <div className="footer__social">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.url}
//                   target="_blank"
//                   className="footer__soc-link w-inline-block"
//                 >
//                   <i className={link.iconClass}></i>
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="footer__col col--3">
//             <div className="footer__form-title">
//               HÃY LÀ NGƯỜI ĐẦU TIÊN NHẬN
//               <br />
//               TIN TỨC BẢO TÀNG SỐ E-MUSEUM
//             </div>
//             <div className="form-block mod--footer w-form">
//               <form
//                 id="wf-form-footer"
//                 name="wf-form-footer"
//                 data-name="footer"
//                 method="get"
//                 className="form"
//                 data-wf-page-id="651c348dccebd78124904023"
//                 data-wf-element-id="631f9564-0461-3f4b-d1f8-cfe9ceca4d78"
//                 aria-label="footer"
//               >
//                 <input
//                   type="email"
//                   className="input w-input"
//                   maxLength={256}
//                   name="email"
//                   data-name="Email"
//                   placeholder="E-MAIL"
//                   id="email"
//                 />
//                 <div className="form__btn-wrap">
//                   <div form-submitted="anim" className="btn btn--slim mod--form">
//                     Đăng ký
//                   </div>
//                   <div className="form__submit-result-wrap">
//                     <div form-submitted="anim" className="form__submit-result">
//                       <img
//                         src="https://uploads-ssl.webflow.com/651c348dccebd78124903fb3/651c348dccebd78124904078_ico-cheked.svg"
//                         loading="lazy"
//                         alt=""
//                         className="form__submit-result-ico"
//                       />
//                     </div>
//                   </div>
//                   <input
//                     type="submit"
//                     defaultValue="Subscribe"
//                     data-wait="Please wait..."
//                     className="form__submit w-button"
//                   />
//                 </div>
//               </form>
//               <div
//                 className="form__succes w-form-done"
//                 tabIndex={-1}
//                 role="region"
//                 aria-label="footer success"
//               >
//                 <div>
//                   Your submission <br />
//                   has been received!
//                 </div>
//               </div>
//               <div
//                 className="w-form-fail"
//                 tabIndex={-1}
//                 role="region"
//                 aria-label="footer failure"
//               >
//                 <div>Ối! Đã xảy ra lỗi khi gửi biểu mẫu.</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer__social mod--mob">
//           {socialLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.url}
//               target="_blank"
//               className="footer__soc-link w-inline-block"
//             >
//               <i className={link.iconClass}></i>
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="footer__elements">
//         <img src="https://uploads-ssl.webflow.com/651c348dccebd78124903fb3/651c348dccebd78124904055_footer_hand.png" loading="eager" width="131.5" alt="" className="footer__elem mod--1" />
//         <img src="https://uploads-ssl.webflow.com/651c348dccebd78124903fb3/651c348dccebd78124904056_footer_rectangle.png" loading="eager" alt="" className="footer__elem mod--2" />
//         <div data-w-id="0becfdc3-d3f2-402c-381a-1d12f18fdf87" className="footer__elem-mob">
//           <img src="https://uploads-ssl.webflow.com/651c348dccebd78124903fb3/651c348dccebd78124904055_footer_hand.png" loading="eager" alt="" width="131.5" className="footer__elem mod--3" />
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
