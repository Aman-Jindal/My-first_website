// app/contact/page.js
"use client"; // this page uses client-side interactivity

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you might send the form data to an API or email service.
        alert("Message sent!");
        // Reset form if needed
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div>
            <h1 className="text-3x1 font-bold mb-4">Contact Me</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block mb-1">Name</label>
                    <input
                        type = "text"
                        name = "name"
                        value = {formData.name}
                        onChange = {handleChange}
                        className = "w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        rows="5"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
