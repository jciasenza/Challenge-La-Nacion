import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { FiCheck, FiAlertCircle, FiMail, FiUser, FiMessageSquare, FiType } from "react-icons/fi";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const valitacionsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail =
    /^(([^<>()[]\.,;:\s@"]+(\.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([^<>()[]\.,;:\s@"]+.)+[^<>()[]\.,;:\s@"]{2,})$/i;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El Nombre solo acepta letras y espacios";
  }
  
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El e-mail es incorrecto";
  }
  
  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto' es requerido";
  }
  
  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El comentario no debe exceder los 255 caracteres";
  }

  return errors;
};

const ContactForm = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    valitacionsForm
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = valitacionsForm(form);
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      // Simular envío
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        handleSubmit(e);
        setTimeout(() => setIsSubmitted(false), 4000);
      }, 800);
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">
        <FiMail /> Formulario de suscripción
      </h2>
      
      {isSubmitted && (
        <div className="contact-success-message">
          <FiCheck className="success-icon" />
          <p>¡Mensaje enviado exitosamente!</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="contact-form">
        <div className={`form-group ${errors.name ? "has-error" : form.name ? "has-value" : ""}`}>
          <div className="form-input-wrapper">
            <FiUser className="form-icon" />
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              disabled={isLoading}
            />
            {form.name && !errors.name && <FiCheck className="form-check" />}
          </div>
          {errors.name && (
            <div className="error-message">
              <FiAlertCircle /> {errors.name}
            </div>
          )}
        </div>

        <div className={`form-group ${errors.email ? "has-error" : form.email ? "has-value" : ""}`}>
          <div className="form-input-wrapper">
            <FiMail className="form-icon" />
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              disabled={isLoading}
            />
            {form.email && !errors.email && <FiCheck className="form-check" />}
          </div>
          {errors.email && (
            <div className="error-message">
              <FiAlertCircle /> {errors.email}
            </div>
          )}
        </div>

        <div className={`form-group ${errors.subject ? "has-error" : form.subject ? "has-value" : ""}`}>
          <div className="form-input-wrapper">
            <FiType className="form-icon" />
            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.subject}
              disabled={isLoading}
            />
            {form.subject && !errors.subject && <FiCheck className="form-check" />}
          </div>
          {errors.subject && (
            <div className="error-message">
              <FiAlertCircle /> {errors.subject}
            </div>
          )}
        </div>

        <div className={`form-group ${errors.comments ? "has-error" : form.comments ? "has-value" : ""}`}>
          <div className="form-textarea-wrapper">
            <FiMessageSquare className="form-icon" />
            <textarea
              name="comments"
              placeholder="Tu mensaje (máx. 255 caracteres)"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.comments}
              disabled={isLoading}
            />
            <span className="char-count">{form.comments.length}/255</span>
            {form.comments && !errors.comments && <FiCheck className="form-check" />}
          </div>
          {errors.comments && (
            <div className="error-message">
              <FiAlertCircle /> {errors.comments}
            </div>
          )}
        </div>

        <button 
          className={`submit-btn ${isLoading ? "loading" : ""}`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loader"></span>
              Enviando...
            </>
          ) : (
            <>
              <FiCheck /> Enviar
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
