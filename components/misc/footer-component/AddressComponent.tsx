// AddressComponent.js
import React from 'react';
import { SchoolAddress } from '../../../store/school-address';

const AddressComponent = () => {
    return (
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
                        <li className="footer__information">{address.title}</li>
                    </a>
                ))}
            </ul>
        </div>
    );
}

export default AddressComponent;
