import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section style={{ marginTop: "1rem" }}>
      <h2>Island interativa</h2>
      <p>Cliques: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </section>
  );
}