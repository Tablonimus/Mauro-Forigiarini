import { useState } from "react";
import igLogo from "./assets/images/logos/ig.jpeg";
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
        <div className="sticky top-0 z-50 w-fit px-2 py-1 rounded-r-lg bg-white text-black font-bold">
          <a
            href="https://www.instagram.com/mauroforgia1/"
            target="_blank"
            className="flex items-center gap-2"
          >
            <img
              src={igLogo}
              alt="instagram"
              className="w-8 h-8 object-cover"
            />
            <span>@mauroforgia1</span>
          </a>
        </div>
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
