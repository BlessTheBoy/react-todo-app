import React, { useEffect, useState } from "react";
import "./scss/number.scss";

function Number({ todos }) {
  const [number, setNumber] = useState(0);
  const colors = [
    "#EB3C27",
    "#FA8A3B",
    "#2E3588",
    "#FEC925",
    "#009688",
    "#EA118D",
  ];
  const hue = colors[Math.floor(Math.random() * colors.length)];
  useEffect(() => {
    setNumber(todos.reduce((acc, todo) => (todo.done ? ++acc : acc), 0));
    // setNumber(0);
    // let i = 0;
    // todos.forEach((todo) => {
    //   if (!todo.completed) i++;
    // });
    // setNumber(i);
  }, [todos]);
  return (
    <div className="number" style={{ color: hue }}>
      {number}
    </div>
  );
}

export default Number;
