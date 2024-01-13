import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./screens/Main/Main";
import Video from "./screens/Video/Video";
import Bio from "./screens/Bio/Bio";
import Trajectory from "./screens/Trajectory/Trajectory";
import Honors from "./screens/Honors/Honors";
import PhotoCarousel from "./screens/PhotoCarousel/PhotoCarousel";
import SuelaProd from "./screens/SuelaProducciones/SuelaProd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main id="main" className="w-screen">
      <section className="h-screen">
        <Main />
      </section>
      <section className="">
        <Video />
      </section>
      <section className="h-screen">
        <Bio />
      </section>
      <section className="h-screen">
        <Trajectory />
      </section>
      <section className="">
        <Honors />
      </section>
      <section className="">
        <PhotoCarousel />
      </section>
      <section>
        <SuelaProd />
      </section>
    </main>
  );
}

export default App;
