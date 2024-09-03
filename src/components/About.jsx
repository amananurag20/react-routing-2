import React, { useEffect, useState } from "react";

const About = () => {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const id=setInterval(() => {
      console.log("set Interval called");
    }, 2000);

    return ()=>{
        console.log("return useEffect")
        clearInterval(id)
    }
  }, []);

  return (
    <div>
      About
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIApD8eXIeXXuTpT3tJbqdNOJtTGMVMiRLYg&s"
        alt="img"
      />
      <button
        onClick={() => {
          setCount(count + 100);
        }}
      >
        Increase count
      </button>
      {count}
    </div>
  );
};

export default About;
