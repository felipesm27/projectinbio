import Faq from "./components/landing-page/Faq";
import Footer from "./components/landing-page/Footer";
import Header from "./components/landing-page/Header";
import Hero from "./components/landing-page/Hero";
import Pricing from "./components/landing-page/Pricing";
import VideoExplanation from "./components/landing-page/Video-Explanation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Header />
      <VideoExplanation />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
