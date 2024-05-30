import { useState } from "react";

function App() {
  const [info, setColor] = useState({ color: "olive", text: "ऑलिव" });
  return (
    <div
      className=" absolute w-full h-screen duration-200"
      style={{ backgroundColor: info.color }}
    >
      <h1 className="relative flex justify-center text-white text-6xl mt-72">
        {info.text}
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor({ color: "#D31112", text: "अमेरिकन रेड" });
            }}
            className="outline-none p-3 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "#D31112" }}
          ></button>
          <button
            onClick={() => {
              setColor({ color: "#565D10", text: "बर्न्ट ऑलिव" });
            }}
            className="outline-none p-3 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "#565D10" }}
          ></button>
          <button
            onClick={() => {
              setColor({ color: "#081B55", text: "मोरक्कन ब्ल्यू" });
            }}
            className="outline-none p-3 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "#081B55" }}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
