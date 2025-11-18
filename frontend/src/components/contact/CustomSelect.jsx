import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomSelect({ label, value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // بستن منو وقتی بیرون کلیک می‌شود
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // پیدا کردن لیبل گزینه انتخاب‌شده
  const selectedLabel = options.find((o) => o.value === value)?.label;

  return (
    <div className="relative" ref={ref}>
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-300">
          {label}
        </label>
      )}

      {/* باکس اصلی */}
      <div
        className="w-full p-3 rounded-lg bg-[#161b22] border border-gray-700 text-gray-300 
        flex justify-between items-center cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <span>
          {selectedLabel || options[0].label}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="text-gray-400"
        >
          ▼
        </motion.span>
      </div>

      {/* گزینه‌ها */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute mt-2 w-full bg-[#0f141a] border border-gray-700 
            rounded-lg shadow-lg z-50 overflow-hidden"
          >
            {options.map((opt, i) => (
              <li
                key={opt.value}
                className={`
                  p-3 cursor-pointer text-gray-300 
                  hover:bg-gray-700 transition
                  ${value === opt.value ? "bg-gray-700" : ""}
                `}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}



// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function CustomSelect({ label, value, onChange, options }) {
//   const [open, setOpen] = useState(false);
//   const ref = useRef();

//   // بستن منو وقتی بیرون کلیک می‌شود
//   useEffect(() => {
//     function handler(e) {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <div className="relative" ref={ref}>
//       {label && (
//         <label className="block text-sm font-medium mb-2 text-gray-300">
//           {label}
//         </label>
//       )}

//       {/* باکس اصلی */}
//       <div
//         className="w-full p-3 rounded-lg bg-[#161b22] border border-gray-700 text-gray-300 
//         flex justify-between items-center cursor-pointer select-none"
//         onClick={() => setOpen(!open)}
//       >
//         <span>
//           {value ? value : "Select..."}
//         </span>

//         {/* فلش */}
//         <motion.span
//           animate={{ rotate: open ? 180 : 0 }}
//           className="text-gray-400"
//         >
//           ▼
//         </motion.span>
//       </div>

//       {/* گزینه‌ها */}
//       <AnimatePresence>
//         {open && (
//           <motion.ul
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.15 }}
//             className="absolute mt-2 w-full bg-[#0f141a] border border-gray-700 
//             rounded-lg shadow-lg z-50 overflow-hidden"
//           >
//             {options.map((opt, i) => (
//               <li
//                 key={i}
//                 className={`
//                   p-3 cursor-pointer text-gray-300 
//                   hover:bg-gray-700 transition
//                   ${value === opt ? "bg-gray-700" : ""}
//                 `}
//                 onClick={() => {
//                   onChange(opt);
//                   setOpen(false);
//                 }}
//               >
//                 {opt}
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
