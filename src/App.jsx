import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";

import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import NewFeatures from "./components/NewFeatures";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import NewFeaturesText from "./components/NewFeaturesText";
import CameraFeature from "./components/CameraFeature";

const App = () => {
  return (
    <main className="bg-black">
      <div className="bg-gradient">
        <Navbar />
        <Banner />
        <Hero />
      </div>
      <Highlights />
      <Model />
      <Features />
      <NewFeatures />
      <NewFeaturesText />
      <CameraFeature />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
