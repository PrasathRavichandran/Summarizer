import Hero from "./components/Hero";
import Demo from "./components/Demo";

export default function App() {
  return (
    <main>
      <div className="gradient" />
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
}
