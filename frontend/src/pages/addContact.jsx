import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addContactRequest } from "../redux/action";
import { FaUser, FaEnvelope, FaArrowLeft, FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@gmail")) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Email must contain @gmail",
      });
      return;
    }
    if (contacts.some((contact) => contact.email === email)) {
      Swal.fire({
        icon: "error",
        title: "Email Already Exists",
        text: "A contact with this email already exists.",
      });
      return;
    }
    setIsSubmitting(true);
    const contact = { name, email };
    dispatch(addContactRequest(contact));
    Swal.fire("Success!", "Contact has been added successfully.", "success");
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors group"
        >
          <FaArrowLeft
            className="group-hover:-translate-x-1 transition-transform"
            size={16}
          />
          <span className="font-medium">Back to Contacts</span>
        </button>
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
            Add New Contact
          </h1>
          <p className="text-slate-600">
            Fill in the information below to add a new contact to your list
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700 sm:w-24 sm:flex-shrink-0"
                >
                  Full Name
                </label>
                <div className="relative w-full sm:flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-slate-400" size={14} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400 text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700 sm:w-24 sm:flex-shrink-0"
                >
                  Email
                </label>
                <div className="relative w-full sm:flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-slate-400" size={14} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder-slate-400 text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Adding...
                    </>
                  ) : (
                    <>
                      <FaCheck size={16} />
                      Add Contact
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
