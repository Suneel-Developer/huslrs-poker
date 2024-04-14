import "./App.css";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Play from "./components/Play";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import TournamentPartners from "./components/TournamentPartners";
import Team from "./components/Team";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      {/* ---------------------- Desktop & Mobile Header ------------  */}
      <Header />
      <MobileHeader />

      {/* ---------------------- Hero Section --------------------  */}
      <Hero id="hero" />

      {/* ----------------------- Red Banner -------------------------------------  */}
      <Banner />

      {/* ----------------------- How to Play Section -------------------------------------  */}
      <Play id="howtoplay" />

      {/* ---------------------- The Vision Section ---------------  */}
      <Vision id="vision" />

      {/* ---------------------- The Mission Section ---------------  */}
      <Mission />

      {/* ---------------------- Poker Tournament Partners Section --------------------------  */}
      <TournamentPartners />

      {/* ---------------------- The Team Section --------------------------  */}
      <Team id="team" />

      {/* ---------------------- About Us Section------------------------------  */}
      <AboutUs id="aboutUs" />

      {/* ---------------------- Footer Section ------------------------------  */}
      <Footer />
    </main>
  );
}

export default App;
