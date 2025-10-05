'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Modal({ modal, setModal }) {
  const modalRef = useRef(null);

  // Close modal on Esc key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setModal({ ...modal, isOpen: false });
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modal, setModal]);

  // Trap focus within modal
  useEffect(() => {
    if (modal.isOpen) {
      modalRef.current?.focus();
    }
  }, [modal.isOpen]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setModal({ ...modal, isOpen: false });
    }
  };

  if (!modal.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      tabIndex={-1}
      ref={modalRef}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <h3 id="modal-title" className="text-xl font-semibold text-gray-900 mb-4">
          {modal.title}
        </h3>
        <p id="modal-description" className="text-gray-600 mb-6">
          {modal.message}
        </p>
        <button
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={() => setModal({ ...modal, isOpen: false })}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}