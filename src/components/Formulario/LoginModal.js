import React from "react";
import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";
import LoginForm from "./LoginForm";

const LoginModal = () => {
  const [isOpenLogin, openLogin, closeLogin] = useModal(false);
  return (
    <div>
      <button className="btn_ingresar" onClick={openLogin}>
        INGRESAR
      </button>
      <Modal isOpen={isOpenLogin} closeModal={closeLogin}>
        <LoginForm />
      </Modal>
    </div>
  );
};

export default LoginModal;