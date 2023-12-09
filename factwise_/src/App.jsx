import { useState } from 'react';
import './App.css';
import { FiSearch } from 'react-icons/fi'; 
import celebritiesData from './celebrities.json';
import UserCard from './components/UserCard';
import DeleteModal from './components/DeleteModal';

const App = () => {
  const [users, setUsers] = useState(celebritiesData);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserToDelete, setSelectedUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (user) => {
    setEditMode(true);
    setEditedUser(user);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedUser(null);
  };

  const handleSaveEdit = () => {
    setEditMode(false);
    setEditedUser(null);
  };

  const handleDelete = (user) => {
    setSelectedUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedUserToDelete(null);
  };

  const handleDeleteConfirm = (user) => {
    setUsers(users.filter((u) => u !== user));
    setShowDeleteModal(false);
    setSelectedUserToDelete(null);
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    // Split the search value into separate words
    const searchWords = searchValue.toLowerCase().split(" ");

    setUsers(celebritiesData.filter((user) => {
      // Combine first name and last name to form a full name string for comparison
      const fullName = `${user.first.toLowerCase()} ${user.last.toLowerCase()}`;

      // Check if all search words are present in the full name
      return searchWords.every((word) => fullName.includes(word));
    }));
  };

  return (
    <div className="container">
      <div className="search-bar">
        <FiSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by first name or last name"
        />
      </div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          editMode={editMode}
          editedUser={editedUser}
          onEdit={handleEdit}
          onCancelEdit={handleCancelEdit}
          onSaveEdit={handleSaveEdit}
          onDelete={handleDelete}
        />
      ))}
      {showDeleteModal && (
        <DeleteModal
          user={selectedUserToDelete}
          onCancelDelete={handleCancelDelete}
          onDeleteConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
};

export default App;
