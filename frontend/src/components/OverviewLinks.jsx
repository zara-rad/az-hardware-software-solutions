import { Link } from "react-router-dom";
import { User, Wrench, Mail } from "lucide-react";

export default function OverviewLinks() {
  const links = [
    {
      icon: <User className="w-8 h-8 text-green-400 mb-3" />,
      title: "About Us",
      desc: "Learn more about our mission and values.",
      to: "/about",
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-400 mb-3" />,
      title: "Our Services",
      desc: "Discover our IT, web, and hardware solutions.",
      to: "/services",
    },
    {
      icon: <Mail className="w-8 h-8 text-green-400 mb-3" />,
      title: "Contact",
      desc: "Get in touch for inquiries or quotes.",
      to: "/contact",
    },
  ];

  return (
    <section className="bg-[#161b22] py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Explore More
        </h2>
        <p className="text-gray-400">
          Get to know us and our services better
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {links.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="group p-8 border border-gray-700 rounded-xl bg-[#0d1117] hover:bg-[#1e2630] transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] text-center flex flex-col items-center"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white mt-3 group-hover:text-green-400 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
