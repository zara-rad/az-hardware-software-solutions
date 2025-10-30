import { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Services = lazy(() => import("./Services"));
const OverviewLinks = lazy(() => import("../components/OverviewLinks"));

export default function Home() {
  useEffect(() => {
    import("./Services");
    import("../components/OverviewLinks");
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden bg-[#0d1117]">
      <Helmet>
        <meta
          name="description"
          content="Professional IT services, web and software development, and hardware solutions in Berlin. Reliable, fast, and tailored to your business needs."
        />
        <link rel="preload" as="image" href="/images/about/about.jpg" />
      </Helmet>

      {/* 🔹 Hero با بک‌گراند خودش */}
      <section className="relative z-20 bg-[#0d1117]">
        <Hero />
      </section>

      {/* 🟩 تصویر پس‌زمینه برای کل بخش پایین صفحه (Services + Explore More + Footer) */}
      <div className="relative z-10 flex-grow">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/about/about.jpg"
            alt="Data Center Background"
            className="w-full h-full object-cover opacity-75 scale-105"
            fetchpriority="high"
          />
          {/* ✅ حذف کامل گرادیان تیره یا بلور */}
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
      </div>
    </div>
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
//         <title>AZ Hardware — IT & Web Solutions in Berlin</title>
//         <meta
//           name="description"
//           content="Professional IT services, web and software development, and hardware solutions in Berlin. Reliable, fast, and tailored to your business needs."
//         />
//       </Helmet>

//       {/* 🟩 فقط پایین صفحه (زیر Hero) بک‌گراند واحد */}
//       <div className="absolute inset-x-0 bottom-0 top-[40vh] pointer-events-none">
//         <img
//           src="/images/about/about.jpg"
//           alt="Data Center Background"
//           className="w-full h-full object-cover opacity-75 scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/60 via-[#0d1117]/40 to-[#0d1117]/90" />
//         <motion.div
//           className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,255,180,0.15)_0%,transparent_70%)] blur-3xl opacity-50 animate-pulse"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <main className="relative z-10 flex-grow">
//         {/* 🔹 Hero بدون تغییر */}
//         <Hero />

//         {/* 🔹 از Our Services تا Explore More روی بک‌گراند مشترک */}
//         <div className="relative z-10">
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
//         </div>
//       </main>
//     </div>
//   );
// }
