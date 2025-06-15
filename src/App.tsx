import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About.tsx";
import Acro from "./pages/Acro.tsx";
import Acting from "./pages/Acting.tsx";
import Adult from "./pages/Adult.tsx";
import Ballet from "./pages/Ballet.tsx";
import Barre from "./pages/Barre.tsx";
import Birthday from "./pages/Birthday.tsx";
import Classes from "./pages/Classes.tsx";
import Company from "./pages/Company.tsx";
import Contact from "./pages/Contact.tsx";
import Contemporary from "./pages/Contemporary.tsx";
import CreativeMovement from "./pages/CreativeMovement.tsx";
import Dance from "./pages/Dance.tsx";
import DressCode from "./pages/DressCode.tsx";
import FAQ from "./pages/FAQ.tsx";
import Featured from "./pages/Featured.tsx";
import Foundations from "./pages/Foundations.tsx";
import FreeTrial from "./pages/FreeTrial.tsx";
import Goddard from "./pages/Goddard.tsx";
import HipHop from "./pages/HipHop.tsx";
import Home from "./pages/Home.tsx";
import Jazz from "./pages/Jazz.tsx";
import Login from "./pages/Login.tsx";
import Modern from "./pages/Modern.tsx";
import MommyMe from "./pages/MommyMe.tsx";
import More from "./pages/More.tsx";
import Music from "./pages/Music.tsx";
import MusicalTheater from "./pages/MusicalTheater.tsx";
import OurStory from "./pages/OurStory.tsx";
import OurTeam from "./pages/OurTeam.tsx";
import OurTeamDance from "./pages/OurTeamDance.tsx";
import OurTeamKaitlin from "./pages/OurTeamKaitlin.tsx";
import OurTeamMattie from "./pages/OurTeamMattie.tsx";
import OurTeamAimee from "./pages/OurTeamAimee.tsx";
import OurTeamAllison from "./pages/OurTeamAllison.tsx";
import OurTeamLauren from "./pages/OurTeamLauren.tsx";
import OurTeamDelia from "./pages/OurTeamDelia.tsx";
import OurTeamMusic from "./pages/OurTeamMusic.tsx";
import OurTeamOwners from "./pages/OurTeamOwners.tsx";
import Photos from "./pages/Photos.tsx";
import Piano from "./pages/Piano.tsx";
import Rental from "./pages/Rental.tsx";
import Schedule from "./pages/Schedule.tsx";
import ScrollToTop from "./ScrollToTop/ScrollToTop.tsx";
import Store from "./pages/Store.tsx";
import Tap from "./pages/Tap.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Tuition from "./pages/Tuition.tsx";
import Violin from "./pages/Violin.tsx";
import Vocals from "./pages/Vocals.tsx";
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
