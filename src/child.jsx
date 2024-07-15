import { useState, useEffect } from "react";

export default function Child(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>

      <div style={{ backgroundColor: "wheat" }}>
        <h2>{count}</h2>

        <button onClick={increment}>Child counter</button>
      </div>
    </div>
  );
}
