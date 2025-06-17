import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Acro from "./pages/Acro";
import Acting from "./pages/Acting";
import Adult from "./pages/Adult";
import Ballet from "./pages/Ballet";
import Barre from "./pages/Barre";
import Birthday from "./pages/Birthday";
import Classes from "./pages/Classes";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Contemporary from "./pages/Contemporary";
import CreativeMovement from "./pages/CreativeMovement";
import Dance from "./pages/Dance";
import DressCode from "./pages/DressCode";
import FAQ from "./pages/FAQ";
import Featured from "./pages/Featured";
import Foundations from "./pages/Foundations";
import FreeTrial from "./pages/FreeTrial";
import Goddard from "./pages/Goddard";
import HipHop from "./pages/HipHop";
import Home from "./pages/Home";
import Jazz from "./pages/Jazz";
import Login from "./pages/Login";
import Modern from "./pages/Modern";
import MommyMe from "./pages/MommyMe";
import More from "./pages/More";
import Music from "./pages/Music";
import MusicalTheater from "./pages/MusicalTheater";
import OurStory from "./pages/OurStory";
import OurTeam from "./pages/OurTeam";
import OurTeamDance from "./pages/OurTeamDance";
import OurTeamKaitlin from "./pages/OurTeamKaitlin";
import OurTeamMattie from "./pages/OurTeamMattie";
import OurTeamAimee from "./pages/OurTeamAimee";
import OurTeamAllison from "./pages/OurTeamAllison";
import OurTeamLauren from "./pages/OurTeamLauren";
import OurTeamDelia from "./pages/OurTeamDelia";
import OurTeamMusic from "./pages/OurTeamMusic";
import OurTeamOwners from "./pages/OurTeamOwners";
import Photos from "./pages/Photos";
import Piano from "./pages/Piano";
import Rental from "./pages/Rental";
import Schedule from "./pages/Schedule";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Store from "./pages/Store";
import Tap from "./pages/Tap";
import Testimonials from "./pages/Testimonials";
import Tuition from "./pages/Tuition";
import Violin from "./pages/Violin";
import Vocals from "./pages/Vocals";
import "./App.css";



const App = () => {

  return (
    <BrowserRouter>
          <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes/acro" element={<Acro />} />
          <Route path="/classes/acting" element={<Acting />} />
          <Route path="/classes/adult" element={<Adult />} />
          <Route path="/classes/ballet" element={<Ballet />} />
          <Route path="/classes/barre-fitness" element={<Barre />} />
          <Route path="/more/birthday-parties" element={<Birthday />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/company" element={<Company />} />
          <Route path="/more/contact" element={<Contact />} />
          <Route path="/classes/contemporary" element={<Contemporary />} />
          <Route
            path="/classes/creative-movement"
            element={<CreativeMovement />}
          />
          <Route path="/classes/dance" element={<Dance />} />
          <Route path="/classes/dress-code" element={<DressCode />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/classes/featured" element={<Featured />} />
          <Route path="/classes/foundations" element={<Foundations />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/classes/goddard-school" element={<Goddard />} />
          <Route path="/classes/hip-hop" element={<HipHop />} />
          <Route path="/classes/jazz" element={<Jazz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/classes/modern" element={<Modern />} />
          <Route path="/classes/mommy-and-me" element={<MommyMe />} />
          <Route path="/more" element={<More />} />
          <Route path="/classes/music" element={<Music />} />
          <Route path="/classes/musical-theater" element={<MusicalTheater />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/our-team/owners" element={<OurTeamOwners />} />
          <Route path="/about/our-team/dance" element={<OurTeamDance />} />

          <Route path="/about/our-team/dance/kaitlin" element={<OurTeamKaitlin />} />
          <Route path="/about/our-team/dance/mattie" element={<OurTeamMattie />} />
          <Route path="/about/our-team/dance/aimee" element={<OurTeamAimee />} />
          <Route path="/about/our-team/dance/allison" element={<OurTeamAllison />} />
          <Route path="/about/our-team/dance/lauren" element={<OurTeamLauren />} />
          <Route path="/about/our-team/dance/delia" element={<OurTeamDelia />} />

          <Route path="/about/our-team/music" element={<OurTeamMusic />} />
          <Route path="/about/photos-videos" element={<Photos />} />
          <Route path="/classes/piano-lessons" element={<Piano />} />
          <Route path="/more/studio-rental" element={<Rental />} />
          <Route path="/classes/class-schedule" element={<Schedule />} />
          <Route path="/store" element={<Store />} />
          <Route path="/classes/tap" element={<Tap />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          <Route path="/classes/tuition-and-fees" element={<Tuition />} />
          <Route path="/classes/violin-lessons" element={<Violin />} />
          <Route path="/classes/vocal-lessons" element={<Vocals />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
