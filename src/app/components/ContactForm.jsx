// components/ContactForm.jsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus({ loading: false, error: "", success: "Message sent!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus({ loading: false, error: data.error || "Error sending message.", success: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-[var(--color-light)] rounded-2xl shadow-lg">
      <h3 className="text-2xl font-semibold text-[var(--color-logo)] mb-4">Send Us a Message</h3>

      <label className="block mb-2">
        <span className="text-[var(--color-foreground)]">Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-[var(--color-primary)]"
        />
      </label>

      <label className="block mb-2">
        <span className="text-[var(--color-foreground)]">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-[var(--color-primary)]"
        />
      </label>

      <label className="block mb-2">
        <span className="text-[var(--color-foreground)]">Subject</span>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="mt-1 block w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-[var(--color-primary)]"
        />
      </label>

      <label className="block mb-4">
        <span className="text-[var(--color-foreground)]">Message</span>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-[var(--color-primary)]"
        />
      </label>

      {status.error && (
        <p className="text-red-600 mb-2">{status.error}</p>
      )}
      {status.success && (
        <p className="text-green-600 mb-2">{status.success}</p>
      )}

      <button
        type="submit"
        disabled={status.loading}
        className="
          w-full
          py-3
          bg-[var(--color-primary)]
          text-white
          font-semibold
          rounded-full
          hover:bg-[var(--color-logo)]
          transition
          duration-300
          disabled:opacity-50
        "
      >
        {status.loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
