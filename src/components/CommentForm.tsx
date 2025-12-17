"use client";
import React, { useState } from "react";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
     if (!formData.website.trim()) {
      newErrors.website = "Please enter website";
    }
    if (!formData.comment.trim()) {
      newErrors.comment = "Please enter your comment";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setShowModal(true);
      setFormData({ name: "", email: "", website: "", comment: "" }); 
    }
  };

  return (
    <div className="w-full max-w-4xl py-5">
      <h2
        className="text-[20px] font-[oswald] mb-6"
        style={{ fontWeight: 600 }}
      >
        LEAVE A REPLY
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 italic">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 italic">{errors.email}</p>
            )}
          </div>
        </div>
        <div>
          <input
            type="text"
            name="website"
            placeholder="Enter Website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
          />
           {errors.website && (
              <p className="text-red-500 text-xs mt-1 italic">{errors.website}</p>
            )}
        </div>
        <div>
          <textarea
            name="comment"
            placeholder="Enter Comment"
            rows={6}
            value={formData.comment}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2"
          ></textarea>
          {errors.comment && (
            <p className="text-red-500 text-xs mt-1 italic">{errors.comment}</p>
          )}
        </div>
        <button
          type="submit"
          className="px-8 py-3 border border-blue-600 text-blue-600 cursor-pointer font-bold text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          POST COMMENT
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-60 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-2xl text-center max-w-sm w-full mx-4 overflow-hidden transform transition-all duration-300 scale-100">
            <div className="h-1 bg-gradient-to-r from-blue-400 to-emerald-600"></div>
            <div className="p-8">
              <div className="mx-auto w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border-4 border-emerald-100">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-bold text-gray-800 mb-3">
                Thank You!
              </p>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Your comment has been successfully submitted. Thank you for taking the time
                to share your thoughts with us. We truly value your feedback.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-all duration-200 font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentForm;
