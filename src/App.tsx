import { useEffect, useState } from "react";
import Header from "./components/Header";

import ExcuseBox from "./components/ExcuseBox";

const App = () => {
  const gradientCombos = [
    ["from-purple-600", "via-pink-500", "to-yellow-400"],
    ["from-blue-500", "via-green-400", "to-purple-500"],
    ["from-red-500", "via-yellow-300", "to-pink-600"],
    ["from-orange-500", "via-red-400", "to-yellow-500"],
    ["from-teal-400", "via-blue-300", "to-indigo-500"],
  ];
  const [gradient, setGradient] = useState(gradientCombos[0]);

  useEffect(() => {
    const randomGradient =
      gradientCombos[Math.floor(Math.random() * gradientCombos.length)];
    setGradient(randomGradient);
  }, []);

  return (
    <>
      <Header />
      <div
        id="main-container"
        className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${gradient[0]} ${gradient[1]} ${gradient[2]} transition-all duration-700 p-4`}
      >
        <ExcuseBox />
      </div>
    </>
  );
};

export default App;
