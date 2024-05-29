import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-[50px] p-4 rounded-2xl leading-none tracking-tighter lowercase text-gray-100">
        चाय और कोड
      </h1>
      <div className=" flex">
        <Card
          firstName="John Doe"
          bio="★✌️★》एक Din मे इतना Famous
★✌️★》होऊंगा की Log भाई को
★✌️★》Instagram पे नहीं बल्की
★✌️★》Google पे Search करेंगे

"
        />
        <Card
          firstName="Jane Doe"
          bio="👔 Fashion Blogger 😎
😇 Kheda (Gujarat)
👉 BIRTH DAY👇
😎 24 April 🎂
👑 Papa ki Jaan👑
"
        />
      </div>
    </>
  );
}

export default App;
