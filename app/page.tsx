import { Main } from "next/document";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modalidades from "./components/Modalidades";
import "./css/pages.css"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Modalidades />
    </div>
  );
}
