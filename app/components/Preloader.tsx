"use client";
import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      let percent = 0;

      const interval = setInterval(() => {
        percent += 10;
        setLoadingPercent(percent);

        if (percent >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
        }
      }, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className={`preloader ${!isVisible ? "hidden" : ""}`}>
      <div className="spinner"></div>
      <div className="loading-text">
        Загрузка
        <div className="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
      <div className="loading-percent">{loadingPercent}%</div>
    </div>
  );
};

export default Preloader;
