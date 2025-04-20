import  { useEffect, useState } from "react";
import html2canvas from "html2canvas-pro";
import { Share } from "lucide-react";

const ExcuseBox = () => {
  const [excuse, setExcuse] = useState("Loading excuse...");
  const [loading, setLoading] = useState(false);

  const fetchExcuse = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dev-excuse-api.onrender.com/excuse");
      const data = await res.json();
      setExcuse(data.excuse);
    } catch (err) {
      setExcuse("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const container = document.getElementById("main-container");
    if (!container) return;

    html2canvas(container, {
      useCORS: true,
      backgroundColor: null,
      scale: 2,
      ignoreElements: (element) => {
        return element.classList.contains("no-download");
      },
    }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "blamShiftExcuse.png";
      link.click();
    });
  };

  useEffect(() => {
    fetchExcuse();
  }, []);

  return (
    <>
      <div
        id="excuse-container"
        className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-3xl text-center transition-all duration-500 hover:scale-105 relative mx-auto"
      >
        <div className="no-download absolute right-3 top-2 sm:right-5">
          {/* width={18} */}
          <Share
            onClick={handleDownload}
            // className="cursor-pointer"
              className="cursor-pointer w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </div>
  
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
          I’m Not Lazy, Just Exceptionally Efficient ⚡
        </h1>
  
        <p className="text-base sm:text-lg md:text-xl italic text-gray-600 mb-6 transition-all duration-300 animate-fade-in">
          {excuse}
        </p>
  
        <div className="flex justify-center">
          <button
            onClick={fetchExcuse}
            disabled={loading}
            className="cursor-pointer no-download bg-black text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow hover:bg-gray-800 active:scale-95 flex items-center gap-2 transition min-w-[160px] sm:min-w-[200px]"
          >
            {loading ? "Loading..." : "Spin the blame wheel 🎡"}
          </button>
        </div>
      </div>
    </>
  );
  
};

export default ExcuseBox;
