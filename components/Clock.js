"use client"; // Pastikan ini ada di bagian atas file jika Anda menggunakan app router

import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(""); // Default sebagai string kosong

  useEffect(() => {
    // Jalankan hanya di sisi klien
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Jakarta", // Set zona waktu Jakarta
      });
      setTime(formattedTime);
    };

    updateClock(); // Update segera saat komponen dimuat
    const interval = setInterval(updateClock, 1000); // Update setiap detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen dilepas
  }, []);

  return (
    <div className="flex items-center space-x-2 text-lg text-white text-mono">
      <span>{time}</span>
      <span className="hidden lg:inline">Jakarta</span> {/* Hanya tampil di layar besar */}
    </div>
  );
};

export default Clock;
