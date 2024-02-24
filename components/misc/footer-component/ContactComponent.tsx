// ContactComponent.js
import React from 'react';
import { TabMain } from '../../../store/tab-main';
import { SocialLinks } from '../../../store/social';

const ContactComponent = () => {
    return (
        <div className="footer__content">
            <h3 className="footer__title">Liên lạc</h3>
            {/* <li className="footer__information">
              Cô Phúc: 070 280 6028 <br />
              (Trợ lý thanh niên)
            </li>
            <li className="footer__information">
              Thầy Phương: 0944 461 267 <br />
              (Giáo viên hỗ trợ công tác Đoàn)
            </li> */}
            <ul className="footer__data">
                <ul className="flex flex-col gap-4">
                    {TabMain.map((tab, index) => (
                        <li className="nav__item" key={index}>
                            <a
                                href={`${tab.href}`}
                                className={`nav__link ${index === 0 ? "active-link" : ""} ${tab.class}`}
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
    );
}

export default ContactComponent;
