import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage("✅ Message envoyé! Nous vous recontacterons bientôt");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="FormContact">
      <Navbar />

      <header>
        <h1>Nous contacter</h1>
      </header>

      {submitMessage && (
        <div className="message">
          <h5>{submitMessage}</h5>
        </div>
      )}

      <section>
        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Prénom Nom</label>
          <br />
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="textarea">Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="40"
            rows="10"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <br />
          <input type="submit" id="submit" value="Envoyer" />
        </form>
      </section>

      <Footer />
    </section>
  );
}

export default ContactForm;
