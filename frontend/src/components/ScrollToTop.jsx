import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🧭 اسکرول نرم به بالا + اجبار به بازسازی DOM
    window.scrollTo({
      top: 0,
      behavior: "instant", // یا "smooth" ولی "instant" مطمئن‌تره در این حالت
    });

    // 🧼 با این خط React رو مجبور می‌کنیم بک‌گراندها و motion دوباره رندر شن
    const body = document.querySelector("body");
    if (body) {
      body.style.display = "none";
      // لحظه‌ای مخفی و دوباره نشون داده می‌شه
      setTimeout(() => (body.style.display = "block"), 0);
    }
  }, [pathname]);

  return null;
}




