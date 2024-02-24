import React from 'react';
import LogoFooter from './logo_footer';
import AddressComponent from './AddressComponent';
import ContactComponent from './ContactComponent';
function Footer() {
  return (
    <footer className='footer section'>
      <div className="footer__container container grid">
        <div className="footer__content">
          <LogoFooter />
          {/* <Newsletter /> */}
        </div>
        <ContactComponent />
        <AddressComponent />
      </div>
      <p
        onClick={() => {
          window.location.href = "https://www.facebook.com/blong1204";
        }}
        className="footer__copy"
      >
        {/* Website có sử dụng một số hình ảnh từ Câu lạc bộ - Dự án trực thuộc Đoàn
        trường.
        <br /> */}
        @blong1204
      </p>
    </footer>
  );
}

export default Footer;
