import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { fetchContactsRequest, deleteContactRequest } from "../redux/action";

function Contact() {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContactsRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContactRequest(id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Contact List</h1>
        <div className="text-lg font-semibold">
          Total Contacts: {contacts.length}
        </div>
      </div>
      <div className="mb-4 text-center">
        <Link
          to="/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Contact
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white shadow-md rounded-lg p-4 border"
          >
            <h2 className="text-xl font-semibold">{contact.name}</h2>
            <p className="text-gray-600">{contact.email}</p>
            <div className="flex justify-end mt-4 space-x-2">
              <Link
                to={`/edit/${contact.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit size={20} />
              </Link>
              <button
                onClick={() => handleDelete(contact.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
