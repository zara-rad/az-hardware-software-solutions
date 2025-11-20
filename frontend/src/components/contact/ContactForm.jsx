import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import CustomSelect from "./CustomSelect";
import { API_BASE } from "../../config";

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    serialNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service" && value !== "shop") {
      setFormData({ ...formData, service: value, serialNumber: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim().length < 5) {
      toast.error(t("contact.form.toast.nameError"), { id: "contact" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t("contact.form.toast.emailError"), { id: "contact" });
      return;
    }

    setLoading(true);
    toast.loading(t("contact.form.toast.loading"), { id: "contact" });

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(t("contact.form.toast.success"), { id: "contact" });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          serialNumber: "",
          message: "",
        });
      } else {
        toast.error("⚠️ " + (data.message || t("contact.form.toast.unknown")), {
          id: "contact",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error(t("contact.form.toast.fail"), { id: "contact" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-[#161b22]/80 backdrop-blur-md rounded-2xl p-8 border-gray-800 
      hover:shadow-[0_0_20px_rgba(200,200,200,0.3)] hover:border-gray-400 
      transition-all duration-300 space-y-6"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <InputField
        label={t("contact.form.name")}
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t("contact.form.placeholder.name")}
        required
      />

      <InputField
        label={t("contact.form.email")}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t("contact.form.placeholder.email")}
        required
      />

      <InputField
        label={t("contact.form.phone")}
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder={t("contact.form.placeholder.phone")}
      />

      <CustomSelect
        label={t("contact.form.service")}
        value={formData.service}
        onChange={(val) =>
          handleChange({ target: { name: "service", value: val } })
        }
        options={[
          { label: t("contact.form.select.default"), value: "" },
          { label: t("contact.form.select.it"), value: "it" },
          { label: t("contact.form.select.web"), value: "web" },
          { label: t("contact.form.select.hardware"), value: "hardware" },
          { label: t("contact.form.select.shop"), value: "shop" },
        ]}
      />

      <InputField
        label={t("contact.form.budget")}
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        placeholder={t("contact.form.placeholder.budget")}
      />

      {formData.service === "shop" && (
        <InputField
          label={t("contact.form.serialNumber")}
          name="serialNumber"
          value={formData.serialNumber}
          onChange={handleChange}
          placeholder={t("contact.form.placeholder.serialNumber")}
        />
      )}

      <InputField
        label={t("contact.form.message")}
        name="message"
        textarea
        value={formData.message}
        onChange={handleChange}
        placeholder={t("contact.form.placeholder.message")}
      />

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className={`w-full py-3 rounded-lg font-semibold ${
          loading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-gray-300 to-gray-500 hover:from-gray-300 hover:to-gray-400"
        } text-black shadow-lg transition-all duration-300`}
      >
        {loading
          ? t("contact.form.button.sending")
          : t("contact.form.button.send")}
      </motion.button>
    </motion.form>
  );
}

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
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-300">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows="5"
          required={required}
          placeholder={placeholder}
          className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-1 focus:ring-gray-500"
        ></textarea>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      )}
    </div>
  );
}
