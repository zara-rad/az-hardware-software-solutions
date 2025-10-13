import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", service: "", budget: "", message: "" });
      } else {
        alert("⚠️ Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-[#161b22]/80 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] p-8 border border-gray-800 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 space-y-6"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        required
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        required
      />

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">Service Type</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200"
        >
          <option value="">Select a service...</option>
          <option>IT Services</option>
          <option>Web & Software Development</option>
          <option>Hardware Solutions</option>
        </select>
      </div>

      <InputField
        label="Estimated Budget"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        placeholder="e.g. €1,000 - €5,000"
      />

      <InputField
        label="Project Details"
        name="message"
        value={formData.message}
        onChange={handleChange}
        textarea
        placeholder="Tell us about your project goals..."
      />

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className={`w-full py-3 rounded-lg font-semibold ${
          loading ? "bg-gray-600 cursor-not-allowed" : "bg-gradient-to-r from-green-500 to-cyan-500"
        } text-white shadow-lg transition-all duration-300`}
      >
        {loading ? "Sending..." : "Send Request"}
      </motion.button>
    </motion.form>
  );
}

// 🔸 Input Field Component (with placeholder support)
function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  textarea = false,
  required,
  placeholder = "",
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-gray-300">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows="5"
          required={required}
          placeholder={placeholder}
          className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 resize-none"
        ></textarea>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500"
        />
      )}
    </div>
  );
}
