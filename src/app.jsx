import { useState } from "react";

import Child from "./child";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>This is Counter {count} </h1>

      <button onClick={increment}>Click to increment</button>

      <Child  number={count} />

      <Child  number={count} />
    </div>
  );
}
