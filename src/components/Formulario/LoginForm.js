import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { FiCheck, FiAlertCircle, FiMail, FiLock } from "react-icons/fi";

const initialForm = {
  email: "",
  password: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexEmail =
    /^(([^<>()[]\.,;:\s@"]+(\.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([^<>()[]\.,;:\s@"]+.)+[^<>()[]\.,;:\s@"]{2,})$/i;

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El e-mail es incorrecto";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Contraseña' es requerido";
  } else if (form.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  return errors;
};

const LoginForm = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envío
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="contact-form-container">
      {isSubmitted ? (
        <div className="contact-success-message">
          <FiCheck className="success-icon" />
          <p>¡Inicio de sesión exitoso!</p>
        </div>
      ) : (
        <>
          <h2 className="contact-form-title">Iniciar Sesión</h2>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className={`form-group ${errors.email && "has-error"}`}>
              <div className="form-input-wrapper">
                <FiMail className="form-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.email}
                  required
                />
              </div>
              {errors.email && (
                <p className="form-error">
                  <FiAlertCircle className="error-icon" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className={`form-group ${errors.password && "has-error"}`}>
              <div className="form-input-wrapper">
                <FiLock className="form-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.password}
                  required
                />
              </div>
              {errors.password && (
                <p className="form-error">
                  <FiAlertCircle className="error-icon" />
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="form-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? "Iniciando..." : "Iniciar Sesión"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginForm;