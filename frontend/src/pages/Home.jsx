import { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
//import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Services = lazy(() => import("./Services"));
const OverviewLinks = lazy(() => import("../components/OverviewLinks"));

export default function Home() {
  useEffect(() => {
    import("./Services");
    import("../components/OverviewLinks");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative min-h-screen flex flex-col text-white overflow-hidden bg-[#0d1117]"
    >
      {/* <Helmet>
        <meta
          name="description"
          content="Professional IT services, web and software development, and hardware solutions in Berlin. Reliable, fast, and tailored to your business needs."
        />
        <link rel="preload" as="image" href="/images/about/about.jpg" />
      </Helmet> */}

      {/* 🔹 Hero با بک‌گراند خودش */}
      <section className="relative z-20 bg-[#0d1117]">
        <Hero />
      </section>

      {/* 🟩 تصویر پس‌زمینه برای کل بخش پایین صفحه */}
      <div className="relative z-10 flex-grow">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/home/home3.png"
            alt="Data Center Background"
            className="w-full h-full object-cover opacity-75 scale-105"
            fetchPriority="high"
          />
        </div>

        <main className="relative z-10 flex-grow">
          <Suspense
            fallback={
              <div className="py-24 text-center text-gray-500 animate-pulse">
                Loading services...
              </div>
            }
          >
            <Services />
            <OverviewLinks />
          </Suspense>
        </main>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d1117]/80 to-transparent pointer-events-none" />
      </div>

    </motion.div>
  );
}




// import { lazy, Suspense, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import Hero from "../components/Hero";

// const Services = lazy(() => import("./Services"));
// const OverviewLinks = lazy(() => import("../components/OverviewLinks"));

// export default function Home() {
//   useEffect(() => {
//     import("./Services");
//     import("../components/OverviewLinks");
//   }, []);

//   return (
//     <div className="relative min-h-screen flex flex-col text-white overflow-hidden bg-[#0d1117]">
//       <Helmet>
//         <meta
//           name="description"
//           content="Professional IT services, web and software development, and hardware solutions in Berlin. Reliable, fast, and tailored to your business needs."
//         />
//         <link rel="preload" as="image" href="/images/about/about.jpg" />
//       </Helmet>

//       {/* 🔹 Hero با بک‌گراند خودش */}
//       <section className="relative z-20 bg-[#0d1117]">
//         <Hero />
//       </section>

//       {/* 🟩 تصویر پس‌زمینه برای کل بخش پایین صفحه (Services + Explore More + Footer) */}
//       <div className="relative z-10 flex-grow">
//         <div className="absolute inset-0 -z-10">
//           <img
//             src="/images/home/home3.png"
//             alt="Data Center Background"
//             className="w-full h-full object-cover opacity-75 scale-105"
//             fetchPriority="high"
//           />
//           {/* ✅ حذف کامل گرادیان تیره یا بلور */}
//         </div>

//         <main className="relative z-10 flex-grow">
//           <Suspense
//             fallback={
//               <div className="py-24 text-center text-gray-500 animate-pulse">
//                 Loading services...
//               </div>
//             }
//           >
//             <Services />
//             <OverviewLinks />
//           </Suspense>
//         </main>
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d1117]/80 to-transparent pointer-events-none" />

//       </div>
      
//     </div>
//   );
// }



