import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    fetch("http://localhost:5050/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const initial = {};
        data.forEach((p) => (initial[p._id] = 0));
        setActiveImageIndex(initial);
      })
      .catch((err) => console.error("❌ Fetch error:", err));
  }, []);

  const handleNext = (id, length) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % length,
    }));
  };

  const handlePrev = (id, length) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + length) % length,
    }));
  };

  const handleThumbnailClick = (id, index) => {
    setActiveImageIndex((prev) => ({ ...prev, [id]: index }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative min-h-screen bg-[#0d1117] text-white py-20 px-6"
    >
      <motion.h1
        className="mt-8 text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("shop.title")}
      </motion.h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.length > 0 ? (
          products.map((p, i) => {
            const currentIndex = activeImageIndex[p._id] || 0;
            const hasImages = p.images?.length > 0;

            return (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-[#121a24]/80 border border-gray-800 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-gray-400 transition-all duration-300"
              >
                <div className="px-4 pt-4 pb-2 text-center border-b border-gray-800">
                  <p className="text-sm text-gray-300 font-medium tracking-wide uppercase">
                    {p.category}
                  </p>
                </div>

                {/* 🖼️ Image Slider */}
                <div className="relative w-full h-56 overflow-hidden bg-[#1b2330]">
                  {hasImages ? (
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentIndex}
                        src={`http://localhost:5050${p.images[currentIndex]}`}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover rounded transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    </AnimatePresence>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      {t("shop.noImage")}
                    </div>
                  )}

                  {hasImages && p.images.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrev(p._id, p.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => handleNext(p._id, p.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* 🔹 Thumbnails */}
                {hasImages && (
                  <div className="flex justify-center items-center gap-2 mt-3">
                    {p.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleThumbnailClick(p._id, index)}
                        className={`w-3 h-3 rounded-full border border-gray-500 transition ${
                          index === currentIndex
                            ? "bg-gray-300 border-gray-400 scale-110"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-400 text-xs">
                      ({p.images.length})
                    </span>
                  </div>
                )}

                {/* 🧾 Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                    {p.title}
                  </h3>

                  {p.description ? (
                    <ul className="text-gray-300 text-sm mb-4 list-disc list-inside space-y-1 text-left inline-block">
                      {p.description
                        .split(/[,;\n]+/)
                        .map((line) => line.trim())
                        .filter((line) => line.length > 0)
                        .map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm mb-4">
                      {t("shop.noDetails")}
                    </p>
                  )}

                  <div className="flex justify-center items-center gap-3">
                    {p.oldPrice && (
                      <span className="text-gray-400 line-through">
                        €{p.oldPrice}
                      </span>
                    )}
                    <span className="text-gray-400 font-bold text-lg">
                      €{p.price}
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-gray-300">
                    <span className="font-semibold text-gray-300">Serial:</span>{" "}
                    {p.serialNumber || "N/A"}
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <p className="text-center text-gray-400">{t("shop.noProducts")}</p>
        )}
      </div>

      {/* 🟩 Info Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center border-t border-gray-800 pt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-300">
          {t("shop.orderInfoTitle")}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          {t("shop.orderInfoText")}
        </p>

        <button
          onClick={() => (window.location.href = "/contact")}
          className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-400 hover:from-gray-500 hover:to-gray-300 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          {t("shop.contactButton")}
        </button>
      </div>
    </motion.div>
  );
}



// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useTranslation } from "react-i18next"; // 🟩 اضافه شد

// export default function Shop() {
//   const [products, setProducts] = useState([]);
//   const [activeImageIndex, setActiveImageIndex] = useState({});
//   const { t } = useTranslation(); // 🟩 استفاده از i18n

//   useEffect(() => {
//     fetch("http://localhost:5050/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         const initial = {};
//         data.forEach((p) => (initial[p._id] = 0));
//         setActiveImageIndex(initial);
//       })
//       .catch((err) => console.error("❌ Fetch error:", err));
//   }, []);

//   const handleNext = (id, length) => {
//     setActiveImageIndex((prev) => ({
//       ...prev,
//       [id]: (prev[id] + 1) % length,
//     }));
//   };

//   const handlePrev = (id, length) => {
//     setActiveImageIndex((prev) => ({
//       ...prev,
//       [id]: (prev[id] - 1 + length) % length,
//     }));
//   };

//   const handleThumbnailClick = (id, index) => {
//     setActiveImageIndex((prev) => ({ ...prev, [id]: index }));
//   };

//   return (
//     <div className="relative min-h-screen bg-[#0d1117] text-white py-20 px-6">
//       <motion.h1
//         className="mt-8 text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text"

//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {t("shop.title")}
//       </motion.h1>

//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {products.length > 0 ? (
//           products.map((p, i) => {
//             const currentIndex = activeImageIndex[p._id] || 0;
//             const hasImages = p.images?.length > 0;

//             return (
//               <motion.div
//                 key={p._id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="group bg-[#121a24]/80 border border-gray-800 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-gray-400 transition-all duration-300"
//               >
//                 <div className="px-4 pt-4 pb-2 text-center border-b border-gray-800">
//                   <p className="text-sm text-gray-300 font-medium tracking-wide uppercase">
//                     {p.category}
//                   </p>
//                 </div>

//                 {/* 🖼️ Image Slider */}
//                 <div className="relative w-full h-56 overflow-hidden bg-[#1b2330]">
//                   {hasImages ? (
//                     <AnimatePresence mode="wait">
//                       <motion.img
//                         key={currentIndex}
//                         src={`http://localhost:5050${p.images[currentIndex]}`}
//                         alt={p.title}
//                         className="absolute inset-0 w-full h-full object-cover rounded transition-opacity duration-300"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                       />
//                     </AnimatePresence>
//                   ) : (
//                     <div className="flex items-center justify-center h-full text-gray-400">
//                       {t("shop.noImage")}
//                     </div>
//                   )}

//                   {hasImages && p.images.length > 1 && (
//                     <>
//                       <button
//                         onClick={() => handlePrev(p._id, p.images.length)}
//                         className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
//                       >
//                         <ChevronLeft size={20} />
//                       </button>
//                       <button
//                         onClick={() => handleNext(p._id, p.images.length)}
//                         className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
//                       >
//                         <ChevronRight size={20} />
//                       </button>
//                     </>
//                   )}
//                 </div>

//                 {/* 🔹 Thumbnails */}
//                 {hasImages && (
//                   <div className="flex justify-center items-center gap-2 mt-3">
//                     {p.images.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleThumbnailClick(p._id, index)}
//                         className={`w-3 h-3 rounded-full border border-gray-500 transition ${
//                           index === currentIndex
//                             ? "bg-gray-300 border-gray-400 scale-110"
//                             : "bg-gray-600 hover:bg-gray-500"
//                         }`}
//                       />
//                     ))}
//                     <span className="ml-2 text-gray-400 text-xs">
//                       ({p.images.length})
//                     </span>
//                   </div>
//                 )}

//                 {/* 🧾 Info */}
//                 <div className="p-6 text-center">
//                   <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-300 transition-colors">
//                     {p.title}
//                   </h3>

//                   {p.description ? (
//                     <ul className="text-gray-300 text-sm mb-4 list-disc list-inside space-y-1 text-left inline-block">
//                       {p.description
//                         .split(/[,;\n]+/)
//                         .map((line) => line.trim())
//                         .filter((line) => line.length > 0)
//                         .map((line, i) => (
//                           <li key={i}>{line}</li>
//                         ))}
//                     </ul>
//                   ) : (
//                     <p className="text-gray-500 text-sm mb-4">
//                       {t("shop.noDetails")}
//                     </p>
//                   )}

//                   <div className="flex justify-center items-center gap-3">
//                     {p.oldPrice && (
//                       <span className="text-gray-400 line-through">
//                         €{p.oldPrice}
//                       </span>
//                     )}
//                     <span className="text-gray-400 font-bold text-lg">
//                       €{p.price}
//                     </span>
//                   </div>

//                   <div className="mt-3 text-sm text-gray-300">
//                     <span className="font-semibold text-gray-300">Serial:</span>{" "}
//                     {p.serialNumber || "N/A"}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })
//         ) : (
//           <p className="text-center text-gray-400">
//             {t("shop.noProducts")}
//           </p>
//         )}
//       </div>

//       {/* 🟩 Info Section */}
//       <div className="max-w-3xl mx-auto mt-16 text-center border-t border-gray-800 pt-10">
//         <h2 className="text-2xl font-bold mb-4 text-gray-300">
//           {t("shop.orderInfoTitle")}
//         </h2>
//         <p className="text-gray-300 leading-relaxed mb-6">
//           {t("shop.orderInfoText")}
//         </p>

//         <button
//           onClick={() => (window.location.href = "/contact")}
//           className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-400 hover:from-gray-500 hover:to-gray-300 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
//         >
//           {t("shop.contactButton")}
//         </button>
//       </div>
//     </div>
//   );
// }




