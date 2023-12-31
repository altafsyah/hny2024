import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import Countdown from "react-countdown";

const App = () => {
  const [msg, setMsg] = useState("Countdown to 2024");
  const [isYearEnd, setIsYearEnd] = useState(false);

  const particlesInit = async (preset) => {
    await loadFireworksPreset(preset);
  };

  const timeLeft = () => {
    const newYear = new Date("January 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = newYear - now;
    return diff;
  };

  return (
    <>
      {isYearEnd && (
        <Particles
          className="!bg-black/90"
          init={particlesInit}
          options={{
            autoPlay: true,
            preset: "fireworks",
            fpsLimit: 60,
            particles: { number: { value: 0 } },
          }}
        />
      )}
      <div className="flex justify-center items-center min-h-screen flex-col bg-black text-white">
        <span className="text-white font-bold text-4xl text-center px-4 z-50">
          <h1>{msg}</h1>
        </span>
        <div className="text"></div>
        <Countdown
          date={Date.now() + timeLeft()}
          onComplete={() => {
            setMsg("Happy New Year 2024");
            setIsYearEnd(true);
          }}
        />
      </div>
    </>
  );
};

export default App;
