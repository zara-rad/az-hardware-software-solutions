export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[#0d1117] text-white">
      {/* عنوان اصلی */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
        Your One-Stop IT & Hardware Partner in Berlin
      </h1>

      {/* توضیح کوتاه زیر عنوان */}
      <p className="text-gray-400 text-sm md:text-base mb-8">
        Freelance IT Services · Web Design · Hardware Sales Support
      </p>

      {/* دکمه‌ها */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-medium transition">
          Get a Quote
        </button>
        <button className="border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded font-medium transition">
          View Services
        </button>
      </div>
    </section>
  );
}
