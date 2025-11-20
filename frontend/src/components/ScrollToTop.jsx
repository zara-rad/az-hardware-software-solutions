import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    const body = document.querySelector("body");
    if (body) {
      body.style.display = "none";
      setTimeout(() => (body.style.display = "block"), 0);
    }
  }, [pathname]);

  return null;
}
