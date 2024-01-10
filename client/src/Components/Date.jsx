import { useState, useEffect } from "react";

export default function DateTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const currTime = new Date().toLocaleTimeString();
      const currDate = new Date().toLocaleDateString();
      setTime(currTime);
      setDate(currDate);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="block">
      <div>{time}</div>
      <div>{date}</div>
    </div>
  );
}
