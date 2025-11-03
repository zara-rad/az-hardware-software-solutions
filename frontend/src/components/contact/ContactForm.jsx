import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

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

  // ✅ هندل تغییرات با شرط پاک‌کردن serialNumber در صورت تغییر سرویس
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service" && value !== t("contact.form.select.shop")) {
      setFormData({ ...formData, [name]: value, serialNumber: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
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
      const res = await fetch("http://localhost:5050/api/contact", {
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
      className="bg-[#161b22]/80 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] p-8 border border-gray-800 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 space-y-6"
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
        required={false}
      />

      {/* 🔹 Service Type Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-300">
          {t("contact.form.service")}
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200"
        >
          <option value="">{t("contact.form.select.default")}</option>
          <option>{t("contact.form.select.it")}</option>
          <option>{t("contact.form.select.web")}</option>
          <option>{t("contact.form.select.hardware")}</option>
          <option>{t("contact.form.select.shop")}</option> {/* ✅ New Option */}
        </select>
      </div>

      <InputField
        label={t("contact.form.budget")}
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        placeholder={t("contact.form.placeholder.budget")}
      />

      {/* ✅ فقط وقتی سرویس Shop Product انتخاب بشه */}
      {formData.service === t("contact.form.select.shop") && (
        <InputField
          label={t("contact.form.serialNumber")}
          type="text"
          name="serialNumber"
          value={formData.serialNumber}
          onChange={handleChange}
          placeholder={t("contact.form.placeholder.serialNumber")}
          required={false}
        />
      )}

      <InputField
        label={t("contact.form.message")}
        name="message"
        value={formData.message}
        onChange={handleChange}
        textarea
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
            : "bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400"
        } text-white shadow-lg transition-all duration-300`}
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
          className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-1 focus:ring-green-500"
        ></textarea>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      )}
    </div>
  );
}

// import { useState } from "react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import { useTranslation } from "react-i18next";

// export default function ContactForm() {
//   const { t } = useTranslation();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "", // ✅ اضافه شد
//     service: "",
//     budget: "",
//     serialNumber: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Validation قبل از ارسال
//     if (formData.name.trim().length < 5) {
//       toast.error(t("contact.form.toast.nameError"), { id: "contact" });
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       toast.error(t("contact.form.toast.emailError"), { id: "contact" });
//       return;
//     }

//     setLoading(true);
//     toast.loading(t("contact.form.toast.loading"), { id: "contact" });

//     try {
//       const res = await fetch("http://localhost:5050/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         toast.success(t("contact.form.toast.success"), { id: "contact" });
//         setFormData({
//           name: "",
//           email: "",
//           service: "",
//           budget: "",
//           message: "",
//         });
//       } else {
//         toast.error("⚠️ " + (data.message || t("contact.form.toast.unknown")), {
//           id: "contact",
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error(t("contact.form.toast.fail"), { id: "contact" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       className="bg-[#161b22]/80 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] p-8 border border-gray-800 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 space-y-6"
//       initial={{ opacity: 0, x: -40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <InputField
//         label={t("contact.form.name")}
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder={t("contact.form.placeholder.name")}
//         required
//       />

//       <InputField
//         label={t("contact.form.email")}
//         name="email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder={t("contact.form.placeholder.email")}
//         required
//       />
//       <InputField
//         label={t("contact.form.phone")}
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//         placeholder={t("contact.form.placeholder.phone")}
//         required={false}
//       />

//       <div>
//         <label className="block text-sm font-medium mb-2 text-gray-300">
//           {t("contact.form.service")}
//         </label>
//         <select
//           name="service"
//           value={formData.service}
//           onChange={handleChange}
//           required
//           className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200"
//         >
//           <option value="">{t("contact.form.select.default")}</option>
//           <option>{t("contact.form.select.it")}</option>
//           <option>{t("contact.form.select.web")}</option>
//           <option>{t("contact.form.select.hardware")}</option>
//         </select>
//       </div>

//       <InputField
//         label={t("contact.form.budget")}
//         name="budget"
//         value={formData.budget}
//         onChange={handleChange}
//         placeholder={t("contact.form.placeholder.budget")}
//       />
//       <InputField
//         label={t("contact.form.serialNumber")}
//         type="text"
//         name="serialNumber"
//         value={formData.serialNumber}
//         onChange={handleChange}
//         placeholder={t("contact.form.placeholder.serialNumber")}
//         required={false}
//       />

//       <InputField
//         label={t("contact.form.message")}
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         textarea
//         placeholder={t("contact.form.placeholder.message")}
//       />

//       <motion.button
//         type="submit"
//         disabled={loading}
//         whileHover={{ scale: 1.03 }}
//         whileTap={{ scale: 0.96 }}
//         className={`w-full py-3 rounded-lg font-semibold ${
//           loading
//             ? "bg-gray-600 cursor-not-allowed"
//             : "bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400"
//         } text-white shadow-lg transition-all duration-300`}
//       >
//         {loading
//           ? t("contact.form.button.sending")
//           : t("contact.form.button.send")}
//       </motion.button>
//     </motion.form>
//   );
// }

// function InputField({
//   label,
//   name,
//   value,
//   onChange,
//   type = "text",
//   textarea = false,
//   required,
//   placeholder = "",
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium mb-2 text-gray-300">
//         {label}
//       </label>
//       {textarea ? (
//         <textarea
//           name={name}
//           value={value}
//           onChange={onChange}
//           rows="5"
//           required={required}
//           placeholder={placeholder}
//           className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-1 focus:ring-green-500"
//         ></textarea>
//       ) : (
//         <input
//           name={name}
//           type={type}
//           value={value}
//           onChange={onChange}
//           required={required}
//           placeholder={placeholder}
//           className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"
//         />
//       )}
//     </div>
//   );
// }
