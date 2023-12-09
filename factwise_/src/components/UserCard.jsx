/* eslint-disable react/prop-types */
// src/components/UserCard.js
import  { useState } from 'react';
import { calculateAge } from '../utils';
import { FiChevronUp, FiChevronDown, FiPenTool, FiTrash2 } from 'react-icons/fi'; // Import Feather Icons

const UserCard = ({ user, editMode, editedUser, onEdit, onCancelEdit, onSaveEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isEditing = editMode && editedUser === user;

  const toggleCard = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const genderOptions = ['Male', 'Female', 'Transgender', 'Rather not say', 'Other'];

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="header" onClick={toggleCard}>
        <div className="cont-1">
          <div className="profile-pic">
            <img src={user.picture} alt={user.first} />
          </div>
          <span className="name">
      
            {user.first} {user.last}
          </span>
        </div>
        <span className="arrow-icon">{isOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
      </div>
      {isOpen && (
        <div className="content">
          <div className="cont-2">
            <p>
              <span className="age-border">Age: {calculateAge(user.dob)}</span>
              <span className="gender-border">Gender: {isEditing ? (
                <select
                  value={editedUser.gender}
                  onChange={(e) => onEdit({ ...editedUser, gender: e.target.value })}
                >
                  {genderOptions.map((option) => (
                    <option key={option} value={option.toLowerCase().replace(/\s+/g, '_')}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <span>{user.gender}</span>
              )}</span>
              <span className="country-border">Country: {user.country}</span>
            </p>
          </div>
          <div className="cont-3">
            <p>Description: {user.description}</p>
          </div>
          <div className="edit-actions">
            {isEditing ? (
              <>
                <button
                  onClick={onSaveEdit}
                  disabled={
                    !editedUser.first ||
                    !editedUser.last ||
                    !editedUser.gender ||
                    !editedUser.email ||
                    !editedUser.country
                  }
                >
                  Save
                </button>
                <button onClick={onCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => onEdit(user)}>
                  <FiPenTool /> 
                </button>
                <button onClick={() => onDelete(user)}>
                  <FiTrash2 />
                </button>
            
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
