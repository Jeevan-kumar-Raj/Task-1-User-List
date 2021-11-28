import React from "react";
import "./user.css";

const User = ({ id, email, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="list">
      <span>{name}</span>
      <span>{email}</span>
      <span>
        <button className="btn btn-info">edit</button>
        <button className="btn btn-warning mx-2" onClick={handleDelete}>
          delete
        </button>
      </span>
    </div>
  );
};

export default User;
