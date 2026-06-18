import Link from "next/link";
import Counter from "./components/Counter";

async function getMessage() {
  return {
    message: "Esta mensagem veio de um Server Component.",
    time: new Date().toLocaleTimeString(),
  };
}

export default async function HomePage() {
  const data = await getMessage();

  return (
    <div>
      <h1>Next.js</h1>
      <p>{data.message}</p>
      <p>Hora: {data.time}</p>

      <Counter />

      <p style={{ marginTop: 16 }}>
        <Link href="/about">Ir para About</Link>
      </p>
    </div>
  );
}