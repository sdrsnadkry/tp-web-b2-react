import { useEffect, useState } from "react";

import Child from "./child";

import ChildWithImage from "./childWithImage";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <ChildWithImage />
    </div>
  );
}
