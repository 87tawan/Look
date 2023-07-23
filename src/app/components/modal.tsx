import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
        <button
          className="bg-purple-800 w-64 text-white opacity p-1 mt-5"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
