import React from 'react';

const ConfrimationModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
  successButtonName
}) => {
  return (
    <div>
      <input type="checkbox" id="confrimationModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confrimationModal"
              className="btn btn-sm btn-primary text-white"
            >
              {successButtonName}
            </label>
            <button
              onClick={closeModal}
              className="btn btn-sm btn-warning text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfrimationModal;