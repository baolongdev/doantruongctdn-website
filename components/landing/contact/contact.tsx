import { ContactInformation } from "./contact-information";
import { ContactForm } from "./contact-form";

export default function Contact() {
  return (
    <section className="contact section container" id="contact">
      <div className="contact__container grid">
        <ContactInformation />
        <ContactForm />
      </div>
    </section>
  );
}
