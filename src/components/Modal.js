'use client';

export default function Modal({ modal, setModal }) {
  return (
    <div id="modal" className="modal" style={{ display: modal.isOpen ? 'flex' : 'none' }}>
      <div className="modal-content animate__animated animate__bounceIn">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{modal.title}</h3>
        <p className="text-gray-600 mb-6">{modal.message}</p>
        <button
          className="cta-button px-8 py-3 text-white rounded-lg"
          onClick={() => setModal({ ...modal, isOpen: false })}
        >
          Close
        </button>
      </div>
    </div>
  );
}