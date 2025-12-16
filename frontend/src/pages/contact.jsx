import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaTrash,
  FaTimes,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContactsRequest,
  deleteContactRequest,
  updateContactRequest,
} from "../redux/action";
import Swal from "sweetalert2";

function Contact() {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    dispatch(fetchContactsRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteContactRequest(id));
        Swal.fire("Deleted!", "The contact has been deleted.", "success");
      }
    });
  };

  const openEditModal = (contact) => {
    setEditingContact(contact);
    setFormData({ name: contact.name, email: contact.email });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingContact(null);
    setFormData({ name: "", email: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContactRequest(editingContact.id, formData));
    closeModal();
    Swal.fire("Success!", "Contact has been updated successfully.", "success");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-1">
              Contacts
            </h1>
            <p className="text-slate-600">Total: {contacts.length}</p>
          </div>
          <Link
            to="/add"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium"
          >
           
            Add Contact
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 max-w-4xl mx-auto">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {contacts.length === 0 ? (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-4 py-8 text-center text-slate-500"
                    >
                      No contacts found. Add your first contact to get started.
                    </td>
                  </tr>
                ) : (
                  contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-slate-900">
                          {contact.name}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-slate-600">
                          {contact.email}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-right">
                        <div className="flex justify-end items-center gap-2">
                          <button
                            onClick={() => openEditModal(contact)}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                            title="Edit"
                          >
                            <FaEdit size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(contact.id)}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                            title="Delete"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="md:hidden divide-y divide-slate-200">
            {contacts.length === 0 ? (
              <div className="px-4 py-8 text-center text-slate-500">
                No contacts found. Add your first contact to get started.
              </div>
            ) : (
              contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-slate-900 truncate mb-1">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-slate-600 truncate">
                        {contact.email}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => openEditModal(contact)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <FaEdit size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">Edit Contact</h2>
              <button
                onClick={closeModal}
                className="text-black hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="edit-name"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="text-slate-400" size={16} />
                    </div>
                    <input
                      type="text"
                      id="edit-name"
                      name="name"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="edit-email"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="text-slate-400" size={16} />
                    </div>
                    <input
                      type="email"
                      id="edit-email"
                      name="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2.5 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
