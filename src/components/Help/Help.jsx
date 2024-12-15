import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import chef from "/assets/icon2.png?url";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Help.scss";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_ymulnwp";
    const templateID = "template_firrrar";
    const userID = "OAiBWamp4N_-lGVvl";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setSubmitSuccess(false))
      .finally(() => setIsSubmitting(false));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="contact-me" id="ContactMe">
      <div className="row align-items-center">
        {/* Section Title */}
        <div className="col-12 mt-4 contact-subtitle">
          <h2 className="text-center">¿Tienes problemas?</h2>
          <p className="text-center">
            ¡Contáctanos a través de este formulario y te ayudamos!
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img src={chef} alt="Developer" className="img-fluid contact-image" />
        </div>

        {/* Form Section */}
        <div className="col-md-6 formulario">
          <form onSubmit={handleSubmit} className="form-contact">
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Por favor escribe tu nombre completo *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Por favor escribe tu correo electrónico *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Por favor escribe tu mensaje *"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {submitSuccess !== null && (
              <div
                className={`mt-3 alert ${
                  submitSuccess ? "alert-success" : "alert-danger"
                }`}
              >
                {submitSuccess
                  ? "¡Tu mensaje ha sido enviado con éxito!"
                  : "Hubo un error al enviar tu mensaje."}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <i className="bi bi-arrow-up-circle-fill"></i>
        </button>
      )}
    </div>
  );
};

export default ContactMe;