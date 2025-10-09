import { Monitor, Code2, Cog } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-cyan-400 mb-4" />,
      title: "IT Services",
      desc: "System administration, network setup, and more.",
    },
    {
      icon: <Code2 className="w-12 h-12 text-cyan-400 mb-4" />,
      title: "Web & Software Development",
      desc: "Custom websites, applications, and modern web tools.",
    },
    {
      icon: <Cog className="w-12 h-12 text-cyan-400 mb-4" />,
      title: "Hardware Solutions",
      desc: "Sales, installation, and maintenance of devices.",
    },
  ];

  return (
    <section className="py-20 bg-[#0d1117] text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-400 mb-12">
        Tailored solutions for your IT, web, and hardware needs
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-8 bg-[#161b22] border border-gray-800 rounded-xl hover:scale-[1.03] hover:bg-[#1c222b] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col items-center text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{service.desc}</p>
            <button className="bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-2 rounded transition duration-200">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
