import React, { useEffect, useState } from "react";

const Login = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove=(event) => {
      console.log("fxn executes");
      const newposition = { x: event.clientX, y: event.clientY };
      setMousePosition(newposition);
    };

    window.addEventListener("mousemove",handleMove) 

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="flex">
      <img
        src="https://img.uxcel.com/tags/login-1698251086462-2x.jpg"
        alt="img"
        className="w-[700px]"
      />

      <div className="text-4xl text-orange-600">
        {mousePosition.x}/{mousePosition.y}
      </div>
    </div>
  );
};

export default Login;
