import { useState } from "react";
import Nav from "../components/Navbars/Nav";

const HomePage = () => {
const [text, setText] = useState({name: "", age: 16})
  return (
    <section className="w-full relative bg-secondary">
      <Nav />
      <header className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl font-semibold text-center">
          Welcome to the Roothub
          {text.age}
        </h1>
        <p className="">Loading...</p>
      </header>
    </section>
  );
};

export default HomePage;
