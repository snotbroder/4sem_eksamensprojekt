"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientWrapper({ children, delay }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: { delay },
    });
  }, []);

  return <>{children}</>;
}
