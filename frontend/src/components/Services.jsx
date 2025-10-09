export default function Services() {
  const services = [
    {
      icon: "🖥️",
      title: "IT Services",
      desc: "System administration, network setup, and more",
    },
    {
      icon: "💻",
      title: "Web & Software",
      desc: "Custom websites, applications, and development",
    },
    {
      icon: "⚙️",
      title: "Hardware Solutions",
      desc: "Sales, installation, and maintenance of devices",
    },
  ];

  return (
    <section className="bg-[#161b22] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-gray-400">
          Tailored solutions for your IT, web, and hardware needs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((srv) => (
          <div
            key={srv.title}
            className="p-8 border border-gray-700 rounded-lg text-center hover:bg-gray-800 transition duration-200"
          >
            <div className="text-green-400 text-5xl mb-4">{srv.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
            <p className="text-gray-400 text-sm">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
