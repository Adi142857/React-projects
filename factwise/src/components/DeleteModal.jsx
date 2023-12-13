/* eslint-disable react/prop-types */
// DeleteModal.js
import { FiX } from 'react-icons/fi'; // Import Feather Icons

const DeleteModal = ({ user, onCancelDelete, onDeleteConfirm }) => {
  return (
    <div className="delete-modal">
      <div className="delete-modal-content">
        <h3>Confirm Deletion</h3>
        <p>Are you sure you want to delete data of {user.first} {user.last}?</p>
        <div className="delete-modal-actions">
            <button onClick={onCancelDelete}>
                Cancel
            </button>
          <button className="delete-btn" onClick={() => onDeleteConfirm(user)}>
            <FiX /> Delete
          </button>

        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
