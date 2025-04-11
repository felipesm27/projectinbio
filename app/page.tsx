import Header from "./components/landing-page/Header";
import Hero from "./components/landing-page/Hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Header />
    </div>
  );
}
