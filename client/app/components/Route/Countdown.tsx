"use client";
import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";

interface CountdownProps {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  message?: string;
}

const Countdown: React.FC<CountdownProps> = ({
  initialDays = 3,
  initialHours = 0,
  initialMinutes = 0,
  initialSeconds = 0,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="bg-white text-gray-700 px-2 py-0.5 rounded-md font-bold text-sm md:text-base">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] md:text-xs mt-0.5 opacity-80">{label}</span>
    </div>
  );

  return (
    <div className="bg-gray-600 text-white py-2 top-0 z-[100] shadow-md">
      <div className="max-w-4xl mx-auto px-3 md:px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 relative">
        <p className="text-xs md:text-sm font-medium font-poppins text-center md:text-left">
          <span className="font-semibold">Student Special: Get 50% off on all courses!</span> Ends in:
        </p>

        {/* Timer */}
        <div className="flex items-center gap-1 md:gap-2 bg-white/10 px-2 md:px-4 py-1 rounded-md">
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="font-bold mb-6 text-sm md:text-base">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="font-bold mb-6 text-sm md:text-base">:</span>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <span className="font-bold mb-6 text-sm md:text-base">:</span>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close countdown"
        >
          <HiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Countdown;