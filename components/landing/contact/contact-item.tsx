import React from "react";

const ContactItem = ({ title, icon, description, onClick }) => (
    <div className="contact__information" onClick={onClick}>
        <h3 className="contact__subtitle">{title}</h3>
        <span className="contact__description">
            <i className={icon}></i>
            {description}
        </span>
    </div>
);

export default ContactItem;
