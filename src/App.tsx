import React, { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import Header from "./components/Header";
const ExcuseBox = () => {
  const [excuse, setExcuse] = useState("Loading excuse...");
  const [loading, setLoading] = useState(false);

  const fetchExcuse = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/excuse");
      const data = await res.json();
      setExcuse(data.excuse);
    } catch (err) {
      setExcuse("Oops! Somthing went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExcuse();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 p-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl text-center transition-all duration-500 hover:scale-105">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            I’m Not Lazy, Just Exceptionally Efficient ⚡
          </h1>
          <p className="text-xl italic text-gray-600 mb-8 transition-all duration-300 animate-fade-in">
            {excuse}
          </p>

          <div className="flex justify-center">
            <button
              onClick={fetchExcuse}
              disabled={loading}
              className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 active:scale-95 flex items-center gap-2 transition min-w-[220px]"
            >
              {loading ? "Loading..." : "Spin the blame wheel 🎡"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExcuseBox;
