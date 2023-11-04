import "./Contact.scss";

const contactDetails = [
  {
    label: "Epost",
    value: "johannes.erdahl.andresen@gmail.com",
    Icon: "",
  },
  {
    label: "Telefon",
    value: "+47 99 50 90 35",
    Icon: "",
  },
  {
    label: "Lokasjon",
    value: "Oslo, Norway",
    Icon: "",
  },
];

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">Kontakt</h2>
      <div className="contact__container">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="contact__card">
            <span className="contact__card-label">{detail.label}</span>
            <span className="contact__card-value">{detail.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
