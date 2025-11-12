import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

export const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground font-bold text-2xl md:text-4xl px-4 py-2 rounded-lg min-w-[60px] md:min-w-[80px] text-center">
            {value.toString().padStart(2, "0")}
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mt-1 capitalize">{key}</p>
        </div>
      ))}
    </div>
  );
};
