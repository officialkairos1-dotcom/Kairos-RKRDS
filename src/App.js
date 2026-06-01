import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Music from "@/pages/Music";
import About from "@/pages/About";
import DJLive from "@/pages/DJLive";
import SamplePacks from "@/pages/SamplePacks";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
          <Route path="/live" element={<DJLive />} />
          <Route path="/sample-packs" element={<SamplePacks />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
